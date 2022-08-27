import {Component, Input, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {IProductData} from "../common/product.interface";
import {ColDef, ColumnApi, GridApi, GridOptions, GridReadyEvent, NewValueParams,} from "ag-grid-community";
import {AgGridAngular} from "ag-grid-angular";
import {RemoveDialogComponent} from "../remove-dialog/remove-dialog.component";
import {MatDialog} from "@angular/material/dialog";
import {AddDialogComponent} from "../add-dialog/add-dialog.component";
import {Domains} from "../Domains";

import {NotificationService, notificationTypes} from "../../services/notification.service";
import {ValidatorService} from "../../services/validator.service";

enum Fields {Category, Name, Space, Description, Price}

@Component({
  selector: 'company-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  columnDefs: ColDef[] = [
    {field: 'Category', editable: true,
      onCellValueChanged: event => this.onDataChange(Fields.Category, event)},
    {field: 'Name', editable: true,
      onCellValueChanged: event => this.onDataChange(Fields.Name, event)},
    {field: 'Space', headerName: 'Space (m)', editable: true,
      onCellValueChanged: event => this.onDataChange(Fields.Space, event)},
    {field: 'Description', wrapText: true, autoHeight: true, sortable: false, editable: true,
      onCellValueChanged: event => this.onDataChange(Fields.Description, event)},
    {field: 'Price', editable: true,
      onCellValueChanged: event => this.onDataChange(Fields.Price, event)},
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

  constructor(public dialog: MatDialog,
              private notificationHelper: NotificationService,
              private validatorService: ValidatorService) { }

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

  private onDataChange(field: Fields, event: NewValueParams) {
    try {
      switch (field) {
        case Fields.Category:
          this.validatorService.validateName(event.newValue);
          break;
        case Fields.Name:
          break;
        case Fields.Space:
          this.validatorService.validateNumber(event.newValue);
          break;
        case Fields.Description:
          break;
        case Fields.Price:
          this.validatorService.validateNumber(event.newValue);
          break;
      }
    } catch (e: any) {
      this.notificationHelper.createNotification(
        notificationTypes.error,
        e.message
      );
      if (event.colDef.field)
        event.data[event.colDef.field] = event.oldValue;
      this.gridApi.refreshCells();
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!this.gridApi) return;
    this.gridApi.setRowData(changes['rowData'].currentValue)
  }
}
