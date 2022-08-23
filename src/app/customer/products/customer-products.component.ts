import {Component, OnInit} from '@angular/core';
import {IOptions} from "./common/options.interface";

@Component({
  selector: 'customer-products',
  templateUrl: './customer-products.component.html',
  styleUrls: ['./customer-products.component.css']
})

export class CustomerProductsComponent implements OnInit {
  options: IOptions;
  constructor() {
    this.options = {
      sortAsc: true,
      options: [],
      search: ''
    }
  }

  ngOnInit(): void {
  }

  handleOptionsChange(options: IOptions) {
    this.options = Object.assign({}, options);
  }
}
