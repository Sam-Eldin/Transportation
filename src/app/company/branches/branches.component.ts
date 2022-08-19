import {Component, OnInit, ViewChild} from '@angular/core';
import {branchesMockData, IBranchData} from "./branches.mock-data";
import {ColDef, ColumnApi, GridApi, GridOptions, GridReadyEvent, NewValueParams} from "ag-grid-community";
import {AgGridAngular} from "ag-grid-angular";
import {RemoveDialogComponent} from "../remove-dialog/remove-dialog.component";
import {MatDialog} from "@angular/material/dialog";
import {NotificationService, notificationTypes} from "../../services/notification.service";
import {AddDialogComponent} from "../add-dialog/add-dialog.component";
import {Domains} from "../Domains";

enum Fields {Id, Location, Name, ManagerName, Phone}
const phoneRegex = /^(0([2-468-9]\d{7}|[5|7]\d{8}))$/;


@Component({
  selector: 'company-branches',
  templateUrl: './branches.component.html',
  styleUrls: ['./branches.component.css']
})
export class BranchesComponent implements OnInit {
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
  rowData: IBranchData[] = [];
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

  constructor(public dialog: MatDialog, private notificationHelper: NotificationService) {
  }

  ngOnInit(): void {
  }

  onGridReady(_: GridReadyEvent) {
    this.gridApi = _.api;
    this.columnApi = _.columnApi;
    this.gridApi.setRowData(branchesMockData)
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
          this.validatePhoneNumber(event.newValue);
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

  private validatePhoneNumber(newPhoneNumber: string) {
    if (newPhoneNumber === '') throw new Error('Number cannot be Empty');
    if (!phoneRegex.test(newPhoneNumber)) throw new Error('Phone format is not correct');
  }
}
