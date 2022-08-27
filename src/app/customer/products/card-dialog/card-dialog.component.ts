import {Component, Inject, OnInit} from '@angular/core';
import {ICardData} from "../common/card.interface,ts";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: 'app-card-dialog',
  templateUrl: './card-dialog.component.html',
  styleUrls: ['./card-dialog.component.css']
})
export class CardDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: { cardData: ICardData }) { }

  ngOnInit(): void {
  }

}
