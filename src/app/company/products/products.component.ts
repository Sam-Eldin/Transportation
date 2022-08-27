import {Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {IProductData} from "../common/product.interface";
import {
  ColDef,
  ColumnApi,
  GridApi,
  GridOptions,
  GridReadyEvent,
  ValueFormatterParams
} from "ag-grid-community";
import {AgGridAngular} from "ag-grid-angular";
import {RemoveDialogComponent} from "../remove-dialog/remove-dialog.component";
import {MatDialog} from "@angular/material/dialog";
import {AddDialogComponent} from "../add-dialog/add-dialog.component";
import {Domains} from "../Domains";

@Component({
  selector: 'company-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, OnChanges {
  columnDefs: ColDef[] = [
    {field: 'Category'},
    {field: 'Name'},
    {
      field: 'Size', headerName: 'Size WxHxL m | Weight kg',
      valueFormatter: ProductsComponent.formatCell
    },
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

  constructor(public dialog: MatDialog) {
  }

  private static formatCell(params: ValueFormatterParams): string {
    return `
      ${params.value.width} x
      ${params.value.height} x
      ${params.value.length} |
      ${params.value.weight}
    `
  }

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

  openDialogAdd(): void {
    this.dialog.open(AddDialogComponent,
      {
        data: {
          gridApi: this.gridApi,
          domain: Domains.Products
        }
      });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!this.gridApi) return;
    this.gridApi.setRowData(changes['rowData'].currentValue)
  }
}
