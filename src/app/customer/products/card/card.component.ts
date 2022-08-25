import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {cardData, ICardData} from "./cardsNew.mock-data";
import {IOptions} from "../common/options.interface";

@Component({
  selector: 'customer-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit, OnChanges {
  @Input() data!: ICardData;
  @Input() options!: IOptions;
  cardsList: ICardData[] = [...cardData]

  greet(op: any) {
    this.sortPrice(op);
  }

  constructor() {
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
    this.cardsList = this.cardsList.filter((a: ICardData) => this.options.options.includes(a.category));
  }

  private filterBySearch() {
    if (!this.options.search) return;
    this.cardsList = this.cardsList.filter((a: ICardData) => a.Name.includes(this.options.search))
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
