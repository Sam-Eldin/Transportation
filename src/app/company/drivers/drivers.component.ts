import {Component, OnInit, ViewChild} from '@angular/core';
import {ColDef, ColumnApi, GridApi, GridOptions, GridReadyEvent} from "ag-grid-community";
import {IDriversData, driversMockData} from "./drivers.mock-data";
import {AgGridAngular} from "ag-grid-angular";
import {MatDialog} from "@angular/material/dialog";
import {RemoveDialogComponent} from "../remove-dialog/remove-dialog.component";

@Component({
  selector: 'company-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.css']
})
export class DriversComponent implements OnInit {
  columnDefs: ColDef[] = [
    {field: 'Id'},
    {field: 'FirstName'},
    {field: 'LastName'},
    {field: 'Date'},
    {field: 'Phone'},
    {field: 'Age'},
    {field: 'Home'},
    {field: 'Truck'},
  ];
  defaultColDef: ColDef = {
    sortable: true, filter: true, flex: 1
  };

  @ViewChild('agGridDrivers') agGrid!: AgGridAngular;
  rowData: IDriversData[] = [];
  private gridApi!: GridApi;
  private columnApi!: ColumnApi;
  gridOptions: GridOptions = {
    columnDefs: this.columnDefs,
    defaultColDef: this.defaultColDef,
    getRowId: params => params.data.Id,
    rowData: this.rowData,
    rowSelection: 'multiple',
    animateRows: true,
  };

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    this.dialog.open(RemoveDialogComponent,
      {
        data: {
          gridApi: this.gridApi
        }
      });
  }

  ngOnInit(): void {
  }

  onGridReady(_: GridReadyEvent) {
    this.gridApi = _.api;
    this.columnApi = _.columnApi;
    this.gridApi.setRowData(driversMockData)
    this.gridApi.setDomLayout('autoHeight');
  }
}
