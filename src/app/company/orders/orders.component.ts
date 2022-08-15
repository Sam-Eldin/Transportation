import { Component, OnInit, ViewChild } from '@angular/core';
import {ColDef, ColumnApi, GridApi, GridOptions, GridReadyEvent} from "ag-grid-community";
import {AgGridAngular} from "ag-grid-angular";
import {IOrdersData, ordersMockData, Status} from "./orders.mock-data";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'company-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  columnDefs: ColDef[] = [
    {field: 'Id'},
    {field: 'Name'},
    {field: 'Date'},
    {field: 'UntilDate'},
    {field: 'Location'},
    {field: 'ToLocation'},
    {field: 'Price'},
    {field: 'Status', cellRenderer: function (params:any) {
        switch (params.value){
          case Status.pending:
            return '<span><i class="material-icons" style="color: #1c52dc">hourglass_full</i></span>'
          case Status.accepted:
            return '<span><i class="material-icons" style="color: #0b8903">check_circle</i></span>'
          case Status.rejected:
            return '<span><i class="material-icons" style="color: #ff1111">cancel</i></span>'
          default:
            return '<span><i <mat-icon>hourglass_empty</mat-icon> </i></span>'
        } }
    },
    {field: 'Driver'},
    {field: 'TruckNumber'}
  ];

  defaultColDef: ColDef = {
    sortable: true, filter: true, flex: 1
  };


  @ViewChild('agGridOrders') agGrid!: AgGridAngular;
  rowData: IOrdersData[] = [];
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

  ngOnInit(): void {
  }

  onGridReady(grid: GridReadyEvent) {
    this.gridApi = grid.api;
    this.columnApi = grid.columnApi;
    this.gridApi.setRowData(ordersMockData)
    this.gridApi.setDomLayout('autoHeight');
  }
}
