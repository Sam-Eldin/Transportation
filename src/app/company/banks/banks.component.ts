import {Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {ColDef, ColumnApi, GridApi, GridOptions, GridReadyEvent} from "ag-grid-community";
import {AgGridAngular} from "ag-grid-angular";
import {IBanksData} from "./banks.mock-data";
import {MatDialog} from "@angular/material/dialog";
import {RemoveDialogComponent} from "../remove-dialog/remove-dialog.component";
import {AddDialogComponent} from "../add-dialog/add-dialog.component";
import {Domains} from "../Domains";

@Component({
  selector: 'company-banks',
  templateUrl: './banks.component.html',
  styleUrls: ['./banks.component.css']
})
export class BanksComponent implements OnInit, OnChanges {
  columnDefs: ColDef[] = [
    {field: 'Number'},
    {field: 'Name'},
  ];
  defaultColDef: ColDef = {
    sortable: true, filter: true, flex: 1
  };
  @Input() rowData: IBanksData[] | null = null;
  @ViewChild('agGridBanks') agGrid!: AgGridAngular;
  private gridApi!: GridApi;
  private columnApi!: ColumnApi;
  gridOptions: GridOptions = {
    columnDefs: this.columnDefs,
    defaultColDef: this.defaultColDef,
    getRowId: params => params.data.Number,
    rowSelection: 'multiple',
    animateRows: true,
  };

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    this.dialog.open(RemoveDialogComponent,
      {
        data: {
          gridApi: this.gridApi,
          title: "bank"
        }
      });
  }

  openDialogAdd(): void {
    this.dialog.open(AddDialogComponent,
      {
        data: {
          gridApi: this.gridApi,
          domain: Domains.Banks
        }
      });
  }

  ngOnInit(): void {
  }

  onGridReady(_: GridReadyEvent) {
    this.gridApi = _.api;
    this.columnApi = _.columnApi;
    this.gridApi.setDomLayout('autoHeight');
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!this.gridApi) return;
    this.gridApi.setRowData(changes['rowData'].currentValue)
  }
}
