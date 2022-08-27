import {Component, Input, OnInit} from '@angular/core';
import {ICardData} from "../common/card.interface,ts";
import {MatDialog} from "@angular/material/dialog";
import {OrderDialogComponent} from "../order-dialog/order-dialog.component";

@Component({
  selector: 'customer-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() data!: ICardData;

  constructor(public dialog: MatDialog) {
  }

  openDialog(): void {
    this.dialog.open(OrderDialogComponent,
      {
        data: {
          cardData: this.data
        }
      });
  }
  ngOnInit(): void {
  }
}
