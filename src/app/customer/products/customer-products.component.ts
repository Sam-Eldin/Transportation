import {Component, EventEmitter, OnInit, Output, SimpleChanges} from '@angular/core';
import {cardData} from "./cardsNew.mock-data";
import {IOptions} from "./common/options.interface";
import {ICardData} from "./common/card.interface,ts";

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

  cardsList: ICardData[] = [...cardData]
  @Output() optionsEventEmitter: EventEmitter<IOptions> = new EventEmitter();

  greet(op: any) {
    this.sortPrice(op);
  }
  handleOptionsChange(options: IOptions) {
    this.cardsList = [...cardData]
    this.options = options;
    this.sortByPrice();
    this.filterByCategory();
    this.filterBySearch();
  }
  ngOnInit(): void {
    this.sortByPrice();
    this.filterByCategory();
  }
  public sortPrice(option: any): ICardData[] {
    if (option.value == 'l2h') {
      return this.cardsList.sort((a: ICardData, b: ICardData) => a.Price - b.Price);
    }
    return this.cardsList.sort((a: ICardData, b: ICardData) => b.Price - a.Price);
  }

  private sortByPrice() {
    console.log(this.options.sortAsc)
    if (this.options.sortAsc)
      this.cardsList = this.cardsList.sort((a: ICardData, b: ICardData) => a.Price - b.Price);
    else
      this.cardsList = this.cardsList.sort((a: ICardData, b: ICardData) => b.Price - a.Price);
  }

  private filterByCategory() {
    if (this.options.options.length === 0) return;
    this.cardsList = this.cardsList.filter((a: ICardData) => this.options.options.includes(a.Category));
  }

  private filterBySearch() {
    if (!this.options.search) return;
    this.cardsList = this.cardsList.filter((a: ICardData) => a.Name.toLowerCase().includes(this.options.search.toLowerCase()))
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['options']) {
      this.cardsList = [...cardData]
      this.sortByPrice();
      this.filterByCategory();
      this.filterBySearch();
    }
  }

}
