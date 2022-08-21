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
  currentDomain: number = 3;
  public domains = {calendar: 0, drivers: 1, trucks: 2, banks: 3, orders: 4}
  rowData: any[] | null = null;
  constructor(private notificationService: NotificationService,
              private firebaseService: FirebaseService) { }

  ngOnInit(): void {
    onSnapshot(
      doc(this.firebaseService.firestore, 'companies/mega'),
      (data) => {
        if (!data.exists()) return;
        this.rowData = <IBanksData[]>(data.data()['banks']);
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
