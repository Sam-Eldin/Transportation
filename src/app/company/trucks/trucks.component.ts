import {Component, OnInit, ViewChild} from '@angular/core';
import {ColDef, ColumnApi, GridApi, GridOptions, GridReadyEvent} from "ag-grid-community";
import {AgGridAngular} from "ag-grid-angular";
import {ITruckData, trucksMockData} from "./trucks.mock-data";
import {MatDialog} from '@angular/material/dialog'
import {RemoveDialogComponent} from "../remove-dialog/remove-dialog.component";

@Component({
  selector: 'company-trucks',
  templateUrl: './trucks.component.html',
  styleUrls: ['./trucks.component.css']
})
export class TrucksComponent implements OnInit {
  columnDefs: ColDef[] = [
    {field: 'PlateNumber'},
    {field: 'Type'},
    {field: 'Year'},
    {field: 'Distance'},
  ];
  defaultColDef: ColDef = {
    sortable: true, filter: true, flex: 1
  };

  @ViewChild('agGridTrucks') agGrid!: AgGridAngular;
  rowData: ITruckData[] = [];
  private gridApi!: GridApi;
  private columnApi!: ColumnApi;
  gridOptions: GridOptions = {
    columnDefs: this.columnDefs,
    defaultColDef: this.defaultColDef,
    getRowId: params => params.data.PlateNumber,
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
    this.gridApi.setRowData(trucksMockData)
    this.gridApi.setDomLayout('autoHeight');
  }
}
