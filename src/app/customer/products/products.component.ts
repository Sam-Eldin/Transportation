import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {cardData, ICardData} from "./card/cards.mock-data";

@Component({
  selector: 'customer-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {

  Categories = new FormControl('');
  categoriesList: string[] = ['Furniture', 'Materials', 'Clothes', 'Cars', 'Apartment', 'utensilic'];
  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return value;
  }


  constructor() { }

  ngOnInit(): void {
  }
  cardsList: ICardData[] = cardData;

}
