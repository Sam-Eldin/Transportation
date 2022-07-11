import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {GridApi} from "ag-grid-community";

@Component({
  selector: 'app-add-dialog',
  templateUrl: './add-dialog.component.html',
  styleUrls: ['./add-dialog.component.css']
})
export class AddDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: {gridApi: GridApi}
  ) { }

  ngOnInit(): void {
  }

  add() {

  }
}
