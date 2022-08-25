import {Component, Input, OnInit} from '@angular/core';
import {ICardData} from "../card/cardsNew.mock-data";

@Component({
  selector: 'app-card-dialog',
  templateUrl: './card-dialog.component.html',
  styleUrls: ['./card-dialog.component.css']
})
export class CardDialogComponent implements OnInit {
  @Input() data!: ICardData;

  constructor() { }

  ngOnInit(): void {
  }

}
