import {Component, Input, OnInit} from '@angular/core';
import {cardData, ICardData} from "./cards.mock-data";

@Component({
  selector: 'customer-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
   @Input() data!: ICardData;
  cardsList: ICardData[] = cardData;

  constructor() { }

  ngOnInit(): void {
  }

}
