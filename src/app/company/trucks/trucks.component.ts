import {Component, OnInit, ViewChild} from '@angular/core';
import {ColDef, GridReadyEvent} from "ag-grid-community";
import {AgGridAngular} from "ag-grid-angular";
import {ITrucksData, trucksMockData} from "./trucks.mock-data";

@Component({
  selector: 'company-trucks',
  templateUrl: './trucks.component.html',
  styleUrls: ['./trucks.component.css']
})
export class TrucksComponent implements OnInit {
  columnDefs: ColDef[] = [
    {field: 'PlateNumber', flex: 1},
    {field: 'Type', flex: 1},
    {field: 'Year', flex: 1},
    {field: 'Distance', flex: 1},
  ];
  defaultColDef: ColDef = {
    sortable: true, filter: true
  };

  @ViewChild(AgGridAngular) agGrid!: AgGridAngular;
  rowData: ITrucksData[];

  constructor() {
    this.rowData = trucksMockData;
  }

  ngOnInit(): void {
  }


  onGridReady(_: GridReadyEvent) {
    this.agGrid.rowData = trucksMockData;
  }


}
