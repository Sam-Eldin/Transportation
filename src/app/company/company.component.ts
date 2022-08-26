import {Component, OnInit} from '@angular/core';
import {FirebaseService} from "../services/firebase.service";
import {IBanksData} from "./common/bank.interface";
import {IBranchData} from "./common/branch.interface";
import {IDriverData} from "./common/driver.interface";
import {IProductData} from "./common/product.interface";
import {ITruckData} from "./common/truck.interface";
import {IOrdersData} from "./common/order.interface";
import {UserService} from "../services/user.service";

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
  ordersCount = 8;
  public domains = {calendar: 0, drivers: 1, trucks: 2, banks: 3, orders: 4, branches: 5, products: 6}
  currentDomain: number = this.domains.banks;
  bankData!: any[] | null;
  driversData!: any[] | null;
  trucksData!: any[] | null;
  branchesData!: any[] | null;
  productsData!: any[] | null;
  ordersData!: any[] | null;
  constructor(private firebaseService: FirebaseService, private userService: UserService) { }

  ngOnInit(): void {
    this.firebaseService.firestore.addSnapshotListener(`companies/${this.userService.userData.company_name}`, (data: any) => {
      if (!data.exists()) return;
      const result = data.data();
      if(result['banks']) this.bankData = <IBanksData[]>(result['banks']);
      if(result['branches']) this.branchesData = <IBranchData[]>(result['branches']);
      if(result['drivers']) this.driversData = <IDriverData[]>(result['drivers']);
      if(result['products']) this.productsData = <IProductData[]>(result['products']);
      if(result['trucks']) this.trucksData = <ITruckData[]>(result['trucks']);
      if(result['orders']) this.ordersData = <IOrdersData[]>(result['orders']);
    });
  }

  changeDomain(newDomain: number) {
    this.currentDomain = newDomain;
  }

  async logout() {
    try{
      await this.firebaseService.authentication.logout();
    } catch (e) {
      console.log(e);
    }
  }
}
