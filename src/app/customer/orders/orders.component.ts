import { Component, OnInit, ViewChild } from '@angular/core';
import {ColDef, ColumnApi, GridApi, GridOptions, GridReadyEvent} from "ag-grid-community";
import {AgGridAngular} from "ag-grid-angular";
import {CustomerOrdersData, customerOrdersData} from "./orders.mock-data";
import {trucksMockData} from "../../company/trucks/trucks.mock-data";
import {RemoveDialogComponent} from "../../company/remove-dialog/remove-dialog.component";
import {MatDialog} from "@angular/material/dialog";


@Component({
  selector: 'customer-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class CustomerOrdersComponent implements OnInit {
  columnDefs: ColDef[] = [
    {field: 'Id'},
    {field: 'Name'},
    {field: 'Status'},
    {field: 'Date'},
    {field: 'Location'},
    {field: 'Price'},
    {field: 'Company'},
  ];

  defaultColDef: ColDef = {
    sortable: true, filter: true, flex: 1
  };

  @ViewChild('agGridTrucks') agGrid!: AgGridAngular;
  rowData: CustomerOrdersData[] = [];
  private gridApi!: GridApi;
  private columnApi!: ColumnApi;
  gridOptions: GridOptions = {
    columnDefs: this.columnDefs,
    defaultColDef: this.defaultColDef,
    getRowId: params => params.data,
    rowData: this.rowData,
    rowSelection: 'multiple',
    animateRows: true,
  };
  constructor(public dialog: MatDialog) {}
  openDialog(): void {
    this.dialog.open(RemoveDialogComponent,
      {
        data: {
          gridApi: this.gridApi,
          title : "truck/s"
        }
      });
  }
  ngOnInit(): void {
  }
  onGridReady(_: GridReadyEvent) {
    this.gridApi = _.api;
    this.columnApi = _.columnApi;
    this.gridApi.setRowData(customerOrdersData)
    this.gridApi.setDomLayout('autoHeight');
  }
}
