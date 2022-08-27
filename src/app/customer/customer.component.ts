import { Component, OnInit } from '@angular/core';
import {FirebaseService} from "../services/firebase.service";


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  ordersCount = 8;
  public domains = {orders: 0, products: 1}
  currentDomain: number = this.domains.products;
  constructor(private firebaseService: FirebaseService) { }

  ngOnInit(): void {
  }

  changeDomain(newDomain: number) {
    this.currentDomain = newDomain;
  }

  async logout() {
    try {
      await this.firebaseService.authentication.logout();
    } catch (e) {

    }
  }
}
