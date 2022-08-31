import {FirebaseService} from "./firebase.service";
import {Injectable} from "@angular/core";
import {NotificationService, notificationTypes} from "./notification.service";
import {IOrder} from "../customer/products/common/order.interface";

export interface IUserData {
  company_manager: boolean;
  company_name: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userData: any = null;
  userEmail: string = '';
  private readonly timeout: number = 600; // timeout for 1 minute
  constructor(private firebaseService: FirebaseService, private notificationService: NotificationService) {
  }

  public async setUserData() {
    const currentUser = this.firebaseService.authentication.getUser();
    if (!currentUser || !currentUser.email) {
      this.userData = null;
      return;
    }
    this.userEmail = currentUser.email;
    this.userData = await this.firebaseService.firestore.fetchUserData(currentUser.email);
  }

  public setFirestoreListener(callBack: any) {
    while (!this.userData) {}
    this.firebaseService.firestore.addSnapshotListener(`companies/${this.userData.company_name}`, callBack);
  }


  public async waitForUser(): Promise<void> {
    const checkUser = () => this.userData;
    let time = 0;
    const condition = (resolve: any, reject: any) => {
      if (checkUser()) resolve();
      else setTimeout(() => condition(resolve, reject), 100);
      if (time++ === this.timeout) {
        reject('Failed to load user\'s data');
      }
    }
    try {
      await new Promise(condition);
    } catch (e: any) {
      this.notificationService.createNotification(notificationTypes.error, e);
    }
  }

  public isUserCompanyManager(): boolean {
    if (!this.userData) return false;
    return this.userData.company_manager;
  }

  public async addNewValueToCompany(newValue: any, domain: string) {
    if (!this.isUserCompanyManager()) throw new Error('User is not connected, try to login!');
    if (!this.userData.company_name) throw new Error('User does not have a company registered for his account');
    const companyPath = `companies/${this.userData.company_name}`
    await this.firebaseService.firestore.addNewValueToArray(newValue, companyPath, domain);
  }

  public async getUserOrders(): Promise<any[]> {
    if (!this.isUserCompanyManager()) return await this.getCustomerOrders();
    return await this.getCompanyOrders();
  }

  private async getCompanyOrders(): Promise<any[]> {
    return await this.firebaseService.firestore.fetchOrders(this.userData.company_name.toLocaleLowerCase(), 'Company');
  }

  private async getCustomerOrders(): Promise<any[]> {
    const fuser = this.firebaseService.authentication.getUser();
    if (fuser && fuser.email)
      return await this.firebaseService.firestore.fetchOrders(fuser.email.toLocaleLowerCase(), 'Email');
    return [];
  }

  async addNewOrder(order: IOrder) {
    await this.firebaseService.firestore.addOrder(order);
  }
}
