import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {IProductData} from "./products.mock-data";
import {ColDef, ColumnApi, GridApi, GridOptions, GridReadyEvent} from "ag-grid-community";
import {AgGridAngular} from "ag-grid-angular";
import {RemoveDialogComponent} from "../remove-dialog/remove-dialog.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'company-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  columnDefs: ColDef[] = [
    {field: 'Category'},
    {field: 'Name'},
    {field: 'Size'},
    {field: 'Description'},
    {field: 'Price'},
  ];
  defaultColDef: ColDef = {
    sortable: true, filter: true, flex: 1
  };

  @ViewChild('agGridProducts') agGrid!: AgGridAngular;
  @Input() rowData: IProductData[] | null = null;
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

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  onGridReady(_: GridReadyEvent) {
    this.gridApi = _.api;
    this.columnApi = _.columnApi;
    this.gridApi.setRowData(this.rowData!)
    this.gridApi.setDomLayout('autoHeight');
  }

  openDialog(): void {
    this.dialog.open(RemoveDialogComponent,
      {
        data: {
          gridApi: this.gridApi,
          title: "product/s"
        }
      });
  }
}
