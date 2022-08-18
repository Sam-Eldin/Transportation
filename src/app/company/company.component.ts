import {Component, OnInit} from '@angular/core';
import {NotificationService, notificationTypes} from "../services/notification.service";

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
  ordersCount = 8;
  public domains = {calendar: 0, drivers: 1, trucks: 2, banks: 3, orders: 4, branches: 5, products: 6}
  currentDomain: number = this.domains.banks;
  constructor(private notificationService: NotificationService) { }

  ngOnInit(): void {
  }

  openSnackBar() {
    this.ordersCount++;
    this.notificationService.createNotification(notificationTypes.info, 'new Order been received');
  }

  changeDomain(newDomain: number) {
    this.currentDomain = newDomain;
  }
}
