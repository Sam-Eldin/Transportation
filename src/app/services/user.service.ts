import {FirebaseService} from "./firebase.service";
import {Injectable} from "@angular/core";

export interface IUserData {
  company_manager: boolean;
  company_name: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userData: any = null;
  constructor(private firebaseService: FirebaseService) {
  }

  public async setUserData() {
    const currentUser = this.firebaseService.authentication.getUser();
    if (!currentUser || !currentUser.email) {
      this.userData = null;
      return;
    }
    this.userData = await this.firebaseService.firestore.fetchUserData(currentUser.email);
  }

  public isUserCompanyManager(): boolean {
    if (!this.userData) return false;
    return this.userData.company_manager;
  }
}
