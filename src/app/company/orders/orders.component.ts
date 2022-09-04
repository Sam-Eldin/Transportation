import {Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {ColDef, ColumnApi, GridApi, GridOptions, GridReadyEvent, NewValueParams} from "ag-grid-community";
import {AgGridAngular} from "ag-grid-angular";
import {IOrdersData, Status} from "../common/order.interface";
import {MatDialog} from "@angular/material/dialog";
import {StatusEditor} from "./status.editor";
import {UserService} from "../../services/user.service";
import {NotificationService, notificationTypes} from "../../services/notification.service";

@Component({
  selector: 'company-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit, OnChanges {
  columnDefs: ColDef[] = [
    {field: 'Id'},
    {field: 'Name'},
    {field: 'Order_Date'},
    {field: 'Receive_Date'},
    {field: 'From'},
    {field: 'To'},
    {field: 'Price'},
    {field: 'Status', cellRenderer: function (params:any) {
        switch (params.value){
          case Status.pending:
            return '<span><i class="material-icons" style="color: #1c52dc">hourglass_full</i></span>'
          case Status.accepted:
            return '<span><i class="material-icons" style="color: #0b8903">check_circle</i></span>'
          case Status.rejected:
            return '<span><i class="material-icons" style="color: #ff1111">cancel</i></span>'
          default:
            return '<span><i class="material-icons" style="color: #1c52dc">hourglass_full</i></span>'
        } },
      cellEditor: StatusEditor,
      onCellValueChanged: async (newValueParams) => await this.updateOrderStatus(newValueParams),
      editable: (params) => {return params.data['Status'] === Status.pending;}
    },
    {field: 'Email'},
    // {field: 'Driver'},
    // {field: 'TruckNumber'}
  ];

  defaultColDef: ColDef = {
    sortable: true, filter: true, flex: 1
  };


  @ViewChild('agGridOrders') agGrid!: AgGridAngular;
  @Input() rowData!: IOrdersData[] | null;
  private gridApi!: GridApi;
  private columnApi!: ColumnApi;
  gridOptions: GridOptions = {
    columnDefs: this.columnDefs,
    defaultColDef: this.defaultColDef,
    getRowId: params => params.data.Id,
    rowSelection: 'multiple',
    animateRows: true,
  };
  constructor(public dialog: MatDialog,
              private userService: UserService,
              private notificationService: NotificationService) {
  }

  ngOnInit(): void {
  }

  onGridReady(grid: GridReadyEvent) {
    this.gridApi = grid.api;
    this.columnApi = grid.columnApi;
    this.gridApi.setRowData(this.rowData!)
    this.gridApi.setDomLayout('autoHeight');
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!this.gridApi) return;
    this.gridApi.setRowData(changes['rowData'].currentValue)
  }

  async updateOrderStatus(newValueParams: NewValueParams) {
    try {
      this.notificationService.createNotification(
        notificationTypes.info, 'Processing request'
      );
      await this.userService.updateOrderStatus(newValueParams.data);
      this.notificationService.createNotification(
        notificationTypes.success, 'Successfully Updated Status'
      );
    } catch (e: any) {
      // console.log(e.message);
      this.notificationService.createNotification(
        notificationTypes.error, e.message
      );
    }
  }
}
