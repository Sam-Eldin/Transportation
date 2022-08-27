import {Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {ColDef, ColumnApi, GridApi, GridOptions, GridReadyEvent, NewValueParams} from "ag-grid-community";
import {AgGridAngular} from "ag-grid-angular";
import {IBanksData} from "../common/bank.interface";
import {MatDialog} from "@angular/material/dialog";
import {RemoveDialogComponent} from "../remove-dialog/remove-dialog.component";
import {AddDialogComponent} from "../add-dialog/add-dialog.component";
import {Domains} from "../Domains";
import {NotificationService, notificationTypes} from "../../services/notification.service";
import {ValidatorService} from "../../services/validator.service";

enum Fields {Number, Name, Account, Balance}

@Component({
  selector: 'company-banks',
  templateUrl: './banks.component.html',
  styleUrls: ['./banks.component.css']
})
export class BanksComponent implements OnInit, OnChanges {
  columnDefs: ColDef[] = [
    {field: 'Number'},
    {field: 'Name'},
    {field: 'Account'},
    {field: 'Balance', editable: true,
      onCellValueChanged: event => this.onDataChange(Fields.Balance, event)}
  ];
  defaultColDef: ColDef = {
    sortable: true, filter: true, flex: 1
  };
  @Input() rowData!: IBanksData[] | null;
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

  constructor(public dialog: MatDialog,
              private notificationHelper: NotificationService,
              private validatorService: ValidatorService) {}

  openDialog(): void {
    this.dialog.open(RemoveDialogComponent,
      {
        data: {
          gridApi: this.gridApi,
          title: "bank/s"
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
    this.gridApi.setRowData(this.rowData!);
    this.gridApi.setDomLayout('autoHeight');
  }

  private onDataChange(field: Fields, event: NewValueParams) {
    try {
      switch (field) {
        case Fields.Number:
          break;
        case Fields.Name:
          break;
        case Fields.Account:
          break;
        case Fields.Balance:
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
