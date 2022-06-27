import {Component, OnInit, ViewChild} from '@angular/core';
import {ColDef, ColumnApi, GridApi, GridReadyEvent} from "ag-grid-community";
import {AgGridAngular} from "ag-grid-angular";
import {ITrucksData, trucksMockData} from "./trucks.mock-data";

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
  rowData: ITrucksData[] = [];
  private gridApi!: GridApi;
  private columnApi!: ColumnApi;

  constructor() {

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
