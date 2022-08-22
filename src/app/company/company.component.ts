import {Component, OnInit} from '@angular/core';
import {FirebaseService} from "../services/firebase.service";
import {doc, onSnapshot} from "firebase/firestore";
import {IBanksData} from "./banks/banks.mock-data";
import {IBranchData} from "./branches/branches.mock-data";
import {IDriverData} from "./drivers/drivers.mock-data";
import {IProductData} from "./products/products.mock-data";
import {ITruckData} from "./trucks/trucks.mock-data";

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
  constructor(private firebaseService: FirebaseService) { }

  ngOnInit(): void {
    onSnapshot(
      doc(this.firebaseService.firestore, 'companies/Finditparts'),
      (data) => {
        if (!data.exists()) return;
        const result = data.data();
        if(result['banks']) this.bankData = <IBanksData[]>(data.data()['banks']);
        if(result['branches']) this.branchesData = <IBranchData[]>(data.data()['branches']);
        if(result['drivers']) this.driversData = <IDriverData[]>(data.data()['drivers']);
        if(result['products']) this.productsData = <IProductData[]>(data.data()['products']);
        if(result['trucks']) this.trucksData = <ITruckData[]>(data.data()['trucks']);
        console.log(this.branchesData);
      });
  }

  changeDomain(newDomain: number) {
    this.currentDomain = newDomain;
  }
}
