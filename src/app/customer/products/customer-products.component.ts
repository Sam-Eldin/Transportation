import {Component, OnInit} from '@angular/core';
import {IOptions} from "./common/options.interface";
import {ICardData} from "./common/card.interface,ts";
import {FirebaseService} from "../../services/firebase.service";
import {PageEvent} from "@angular/material/paginator";

@Component({
  selector: 'customer-products',
  templateUrl: './customer-products.component.html',
  styleUrls: ['./customer-products.component.css']
})

export class CustomerProductsComponent implements OnInit {

  options: IOptions;
  isLoading: boolean = true;
  tabLoadTimes: Date[] = [];
  // currentPage = 1;
  //
  // changePage(page: number): void {
  //   this.currentPage = page;
  // }
  getTimeLoaded(index: number) {
    if (!this.tabLoadTimes[index]) {
      this.tabLoadTimes[index] = new Date();
    }

    return this.tabLoadTimes[index];
  }

  constructor(private firebaseService: FirebaseService) {
    this.options = {
      sortAsc: true,
      options: [],
      search: ''
    }
  }

  cardsList: ICardData[] = []
  tempList: ICardData[] = []
  pageIndex: any;
  ///push

  handleOptionsChange(options: IOptions) {
    this.options = options;
    this.tempList = this.cardsList;
    this.sortByPrice();
    // this.filterByCategory();
    this.isLoading = true;
    this.firebaseService.firestore.getProductsFromSupplier(this.options.options).then((products) => {
      this.cardsList = products;
      this.tempList = [...this.cardsList];
      this.sortByPrice();
      //  this.filterByCategory();
      this.isLoading = false;
    });
    this.filterBySearch();
  }

  ngOnInit(): void {
    this.isLoading = true;
    this.firebaseService.firestore.getProductsFromSupplier(this.options.options).then((products) => {
      this.cardsList = products;
      this.tempList = [...this.cardsList];
      this.sortByPrice();
      //  this.filterByCategory();
      this.isLoading = false;
    });
  }


  private sortByPrice() {
    this.tempList = this.tempList.sort(
      (a: ICardData, b: ICardData) => this.options.sortAsc ?
        a.Price - b.Price :
        b.Price - a.Price);
  }

  private filterByCategory() {
    if (this.options.options.length === 0) return;
    this.tempList = this.tempList.filter((a: ICardData) => this.options.options.includes(a.Category));
  }

  private filterBySearch() {
    if (!this.options.search) return;
    this.tempList = this.tempList.filter((a: ICardData) => a.Name.toLowerCase().includes(this.options.search.toLowerCase()))
  }

  handlePageEvent($event: PageEvent) {

  }
}
export class PaginatorHarnessExample {
  length = 500;
  pageSize = 10;
  pageIndex = 0;
  pageSizeOptions = [5, 10, 25];
  showFirstLastButtons = true;

  handlePageEvent(event: PageEvent) {
    this.length = event.length;
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;
  }
}
