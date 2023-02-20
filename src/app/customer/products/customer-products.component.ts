import {Component, OnInit} from '@angular/core';
import {IOptions} from "./common/options.interface";
import {ICardData} from "./common/card.interface,ts";
import {FirebaseService} from "../../services/firebase.service";

@Component({
  selector: 'customer-products',
  templateUrl: './customer-products.component.html',
  styleUrls: ['./customer-products.component.css']
})

export class CustomerProductsComponent implements OnInit {
  options: IOptions;
  isLoading: boolean = true;

  constructor(private firebaseService: FirebaseService) {
    this.options = {
      sortAsc: true,
      options: [],
      search: ''
    }
  }

  cardsList: ICardData[] = []
  tempList: ICardData[] = []

  handleOptionsChange(options: IOptions) {
    this.options = options;
    this.tempList = this.cardsList;
    this.sortByPrice();
    this.filterByCategory();
    this.filterBySearch();
  }

  ngOnInit(): void {
    this.isLoading = true;
      this.firebaseService.firestore.getAllProducts().then((products) => {
        this.cardsList = products;
        this.tempList = this.cardsList;
        this.sortByPrice();
        this.filterByCategory();
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
    console.log("we are here")
    this.firebaseService.firestore.getProducts(this.options.options).then((products) =>{
      this.cardsList = products;
      this.tempList = this.cardsList;
//      this.filterByCategory();
      this.sortByPrice();
      this.isLoading = false;
  });
  //  this.tempList = this.tempList.filter((a: ICardData) => this.options.options.includes(a.Category));
  }

  private filterBySearch() {
    if (!this.options.search) return;
    this.tempList = this.tempList.filter((a: ICardData) => a.Name.toLowerCase().includes(this.options.search.toLowerCase()))
  }
}
