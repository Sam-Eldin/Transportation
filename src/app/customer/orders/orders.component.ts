import { Component, OnInit, ViewChild } from '@angular/core';
import {ColDef, ColumnApi, GridApi, GridOptions, GridReadyEvent} from "ag-grid-community";
import {AgGridAngular} from "ag-grid-angular";
import {CustomerOrdersData, Status} from "./orders.mock-data";
import {MatDialog} from "@angular/material/dialog";
import {UserService} from "../../services/user.service";


@Component({
  selector: 'customer-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class CustomerOrdersComponent implements OnInit {
  columnDefs: ColDef[] = [
    {field: 'Id'},
    {field: 'Name'},
    {field: 'Order_Date'},
    {field: 'Receive_Date'},
    {field: 'Status', cellRenderer: function (params:any) {
        switch (params.value){
          case Status.pending:
            return '<span><i class="material-icons" style="color: #1c52dc">hourglass_full</i></span>'
          case Status.accepted:
            return '<span><i class="material-icons" style="color: #0b8903">check_circle</i></span>'
          case Status.rejected:
            return '<span><i class="material-icons" style="color: #ff1111">cancel</i></span>'
          default:
            return '<span><i class="material-icons" style="color: #1c52dc">hourglass_full</i></span>'
      } }
    },
    {field: 'From'},
    {field: 'To'},
    {field: 'Price'},
    {field: 'Company'},
  ];

  defaultColDef: ColDef = {
    sortable: true, filter: true, flex: 1
  };


  @ViewChild('agGridCustomerOrders') agGrid!: AgGridAngular;
  rowData: CustomerOrdersData[] = [];
  private gridApi!: GridApi;
  private columnApi!: ColumnApi;
  gridOptions: GridOptions = {
    columnDefs: this.columnDefs,
    defaultColDef: this.defaultColDef,
    getRowId: params => params.data.Id,
    // rowData: this.rowData,
    rowSelection: 'multiple',
    animateRows: true,
  };
  constructor(public dialog: MatDialog, private userService: UserService) {}

  async ngOnInit(): Promise<void> {
    await this.userService.waitForUser();
    console.log('do stuff')
    this.rowData = await this.userService.getUserOrders();
    this.gridApi.setRowData(this.rowData);
  }
  onGridReady(grid: GridReadyEvent) {
    this.gridApi = grid.api;
    this.columnApi = grid.columnApi;
    this.gridApi.setDomLayout('autoHeight');
  }
}
