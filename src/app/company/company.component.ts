import {Component, OnInit} from '@angular/core';
import {NotificationService, notificationTypes} from "../services/notification.service";

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
  ordersCount = 8;
  currentDomain: number = 2;
  public domains = {calendar: 0, drivers: 1, trucks: 2, banks: 3, orders: 4}
  constructor(private _notification: NotificationService) { }

  ngOnInit(): void {
  }

  openSnackBar() {
    this.ordersCount++;
    this._notification.createNotification(notificationTypes.info, 'new Order been received');
  }

  changeDomain(newDomain: number) {
    this.currentDomain = newDomain;
  }
}
