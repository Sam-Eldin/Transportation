import {Component, OnInit} from '@angular/core';
import {NotificationService, notificationTypes} from "../services/notification.service";

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
  ordersCount = 8;

  constructor(private _notification: NotificationService) { }

  ngOnInit(): void {
  }

  openSnackBar() {
    this.ordersCount++;
    this._notification.createNotification(notificationTypes.info, 'new Order been received');
  }

}
