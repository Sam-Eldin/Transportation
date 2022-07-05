import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {GridApi} from "ag-grid-community";

@Component({
  selector: 'company-remove-dialog',
  templateUrl: './remove-dialog.component.html',
  styleUrls: ['./remove-dialog.component.css']
})
export class RemoveDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: {gridApi: GridApi}
  ) { }

  ngOnInit(): void {
  }

  remove() {
    const rows = this.data.gridApi.getSelectedRows();
    this.data.gridApi.applyTransaction({remove: rows})
  }
}
