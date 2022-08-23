import {Component, Input, OnInit} from '@angular/core';
import {cardData, ICardData} from "./cards.mock-data";
import {ToolbarComponent} from "../toolbar/toolbar.component";

@Component({
  selector: 'customer-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
   @Input() data!: ICardData;
  cardsList: ICardData[] = cardData;
  greet(op: any){
    this.sortPrice(op);
  }
  constructor() { }

  ngOnInit(): void {
  }
  public sortPrice(option: any): ICardData[]{
    if (option.value =='l2h') {
      return this.cardsList.sort((a: ICardData, b: ICardData) => a.Price - b.Price);
    }
    return this.cardsList.sort((a: ICardData, b: ICardData) => b.Price - a.Price);
  }

  // public filterCat(): ICardData[]{
  //   return this.cardsList.filter((a: ICardData) => a.category === this.Categories.value);
  // }

}
