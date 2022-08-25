import {Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {IBranchData} from "../common/branch.interface";
import {ColDef, ColumnApi, GridApi, GridOptions, GridReadyEvent, NewValueParams} from "ag-grid-community";
import {AgGridAngular} from "ag-grid-angular";
import {RemoveDialogComponent} from "../remove-dialog/remove-dialog.component";
import {MatDialog} from "@angular/material/dialog";
import {NotificationService, notificationTypes} from "../../services/notification.service";
import {AddDialogComponent} from "../add-dialog/add-dialog.component";
import {Domains} from "../Domains";
import {ValidatorService} from "../../services/validator.service";

enum Fields {Id, Location, Name, ManagerName, Phone}


@Component({
  selector: 'company-branches',
  templateUrl: './branches.component.html',
  styleUrls: ['./branches.component.css']
})
export class BranchesComponent implements OnInit, OnChanges {
  columnDefs: ColDef[] = [
    {field: 'Id'},
    {field: 'Location'},
    {field: 'Name'},
    {
      field: 'ManagerName', editable: true,
      onCellValueChanged: event => this.onDataChange(Fields.Phone, event)
    },
    {
      field: 'Phone',
      sortable: false,
      editable: true,
      onCellValueChanged: event => this.onDataChange(Fields.Phone, event)
    },
  ];
  defaultColDef: ColDef = {
    sortable: true, filter: true, flex: 1
  };

  @ViewChild('agGridBranches') agGrid!: AgGridAngular;
  @Input() rowData: IBranchData[] | null = null;
  private gridApi!: GridApi;
  private columnApi!: ColumnApi;
  gridOptions: GridOptions = {
    columnDefs: this.columnDefs,
    defaultColDef: this.defaultColDef,
    getRowId: params => params.data['Id'],
    rowData: this.rowData,
    rowSelection: 'multiple',
    animateRows: true,
  };

  constructor(public dialog: MatDialog,
              private notificationHelper: NotificationService,
              private validatorService: ValidatorService) {
  }

  ngOnInit(): void {
  }

  onGridReady(_: GridReadyEvent) {
    this.gridApi = _.api;
    this.columnApi = _.columnApi;
    this.gridApi.setRowData(this.rowData!);
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
          domain: Domains.Branches
        }
      });
  }

  private onDataChange(field: Fields, event: NewValueParams) {
    try {
      console.log(event)
      switch (field) {
        case Fields.Id:
          break;
        case Fields.Location:
          break;
        case Fields.Name:
          break;
        case Fields.ManagerName:
          break;
        case Fields.Phone:
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
