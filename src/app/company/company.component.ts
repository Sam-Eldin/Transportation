import {Component, OnInit} from '@angular/core';
import {NotificationService, notificationTypes} from "../services/notification.service";
import {FirebaseService} from "../services/firebase.service";
import {doc, onSnapshot} from "firebase/firestore";
import {IBanksData} from "./banks/banks.mock-data";

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
  ordersCount = 8;
  public domains = {calendar: 0, drivers: 1, trucks: 2, banks: 3, orders: 4, branches: 5, products: 6}
  currentDomain: number = this.domains.banks;
  bankData: any[] | null = null;
  driversData: any[] | null = null;
  trucksData: any[] | null = null;
  branchesData: any[] | null = null;
  productsData: any[] | null = null;
  constructor(private notificationService: NotificationService,
              private firebaseService: FirebaseService) { }

  ngOnInit(): void {
    onSnapshot(
      doc(this.firebaseService.firestore, 'companies/Finditparts'),
      (data) => {
        if (!data.exists()) return;
        const result = data.data();
        if(result['banks']) this.bankData = <IBanksData[]>(data.data()['banks']);
        if(result['branches']) this.branchesData = <IBanksData[]>(data.data()['branches']);
        if(result['drivers']) this.driversData = <IBanksData[]>(data.data()['drivers']);
        if(result['products']) this.productsData = <IBanksData[]>(data.data()['products']);
        if(result['trucks']) this.trucksData = <IBanksData[]>(data.data()['trucks']);
      });
  }

  openSnackBar() {
    this.ordersCount++;
    this.notificationService.createNotification(notificationTypes.info, 'new Order been received');
  }

  changeDomain(newDomain: number) {
    this.currentDomain = newDomain;
  }
}
