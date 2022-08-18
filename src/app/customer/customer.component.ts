import { Component, OnInit } from '@angular/core';
import {NotificationService, notificationTypes} from "../services/notification.service";

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  ordersCount = 8;
  constructor(private notificationService: NotificationService) { }

  ngOnInit(): void {
  }

  openSnackBar() {
    this.ordersCount++;
    this.notificationService.createNotification(notificationTypes.info, 'new Order been received');
  }

}
