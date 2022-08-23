import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl} from "@angular/forms";
import {cardData, ICardData} from "../card/cards.mock-data";

@Component({
  selector: 'customer-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  search : String ="";
  Categories = new FormControl('');
  categoriesList: string[] = ['Furniture', 'Materials', 'Clothes', 'Cars', 'Apartment', 'utensilic'];
  option : string ="l2h";

  /* budget*/
  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }
    return value;
  }
  constructor() {}

  ngOnInit(): void {}

  // savePrice(a: any){
  //   let option = a;
  // }


  @Output() greetEvent = new EventEmitter();
  callParentGreet(a: any){
    this.greetEvent.emit(a);
    this.greetEvent.emit(this.Categories.value);
  }
}
