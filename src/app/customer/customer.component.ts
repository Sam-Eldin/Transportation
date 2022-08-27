import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  ordersCount = 8;
  public domains = {orders: 0, products: 1}
  currentDomain: number = this.domains.products;
  constructor() { }

  ngOnInit(): void {
  }

  changeDomain(newDomain: number) {
    this.currentDomain = newDomain;
  }

}
