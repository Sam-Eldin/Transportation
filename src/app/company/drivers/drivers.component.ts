import {Component, Input, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {ColDef, ColumnApi, GridApi, GridOptions, GridReadyEvent, NewValueParams} from "ag-grid-community";
import {IDriverData} from "../common/driver.interface";
import {AgGridAngular} from "ag-grid-angular";
import {MatDialog} from "@angular/material/dialog";
import {RemoveDialogComponent} from "../remove-dialog/remove-dialog.component";
import {AddDialogComponent} from "../add-dialog/add-dialog.component";
import {Domains} from "../Domains";
import {NotificationService, notificationTypes} from "../../services/notification.service";
import {ValidatorService} from "../../services/validator.service";

enum Fields {Id, FirstName, LastName, Date, Phone, Age, Home, Truck}


@Component({
  selector: 'company-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.css']
})
export class DriversComponent implements OnInit {
  columnDefs: ColDef[] = [
    {field: 'Id'},
    {field: 'FirstName', editable: true,
      onCellValueChanged: event => this.onDataChange(Fields.FirstName, event)},
    {field: 'LastName', editable: true,
      onCellValueChanged: event => this.onDataChange(Fields.LastName, event)},
    {field: 'Date'},
    {field: 'Phone', editable: true,
      onCellValueChanged: event => this.onDataChange(Fields.Phone, event)},
    {field: 'Age', editable: true,
      onCellValueChanged: event => this.onDataChange(Fields.Age, event)},
    {field: 'Home', editable: true,
      onCellValueChanged: event => this.onDataChange(Fields.Home, event)},
    {field: 'Truck', editable: true,
      onCellValueChanged: event => this.onDataChange(Fields.Truck, event)},
  ];
  defaultColDef: ColDef = {
    sortable: true, filter: true, flex: 1
  };

  @ViewChild('agGridDrivers') agGrid!: AgGridAngular;
  @Input() rowData: IDriverData[] | null = null;

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

  constructor(public dialog: MatDialog, private notificationHelper: NotificationService,
              private validatorService: ValidatorService) {}

  openDialog(): void {
    this.dialog.open(RemoveDialogComponent,
      {
        data: {
          gridApi: this.gridApi,
          title: "driver/s"
        }
      });
  }

  openDialogAdd(): void {
    this.dialog.open(AddDialogComponent,
      {
        data: {
          gridApi: this.gridApi,
          domain: Domains.Drivers
        }
      });
  }

  ngOnInit(): void {
  }

  onGridReady(_: GridReadyEvent) {
    this.gridApi = _.api;
    this.columnApi = _.columnApi;
    this.gridApi.setRowData(this.rowData!)
    this.gridApi.setDomLayout('autoHeight');
  }

  private onDataChange(field: Fields, event: NewValueParams) {
    try {
      switch (field) {
        case Fields.Id:
          break;
        case Fields.FirstName:
          this.validatorService.validateName(event.newValue);
          break;
        case Fields.LastName:
          this.validatorService.validateName(event.newValue);
          break;
        case Fields.Date:
          break;
        case Fields.Phone:
          this.validatorService.validatePhoneNumber(event.newValue);
          break;
        case Fields.Age:
          this.validatorService.validateNumber(event.newValue);
          break;
        case Fields.Home:
          this.validatorService.validateName(event.newValue);
          break;
        case Fields.Truck:
          this.validatorService.validatePhoneNumber(event.newValue);
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
