import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {GridApi} from "ag-grid-community";
import {NotificationService, notificationTypes} from "../../services/notification.service";

export interface IAddDialogData {
  gridApi: GridApi;
  domain: 'Banks' | 'Trucks' | 'Drivers';
}

@Component({
  selector: 'app-add-dialog',
  templateUrl: './add-dialog.component.html',
  styleUrls: ['./add-dialog.component.css']
})
export class AddDialogComponent implements OnInit {
  public bankData = {Name: '', Number: ''}
  public bankName: string = '';
  public bankNumber: string = '';
  // private driverData: IDriverData = {Id: '', Age: 0, Date: '', Home: '', Phone};
  // private truckData: ITruckData = {};
  constructor(@Inject(MAT_DIALOG_DATA) public data: IAddDialogData
  , private notificationService: NotificationService) { }

  ngOnInit(): void {
  }

  validate() {
    switch (this.data.domain) {
      case "Trucks": this.validateTruckInput(); break;
      case "Banks": this.validateBankInput(); break;
      case "Drivers": this.validateDriversInput(); break;
    }
  }

  add() {
    try {
      this.validate();
      // const data = this.data.domain === "Banks" ? this.bankData :
      //   this.data.domain === "Drivers" ? this.driverData : this.truckData;
      this.data.gridApi.applyTransaction({add: [this.bankData]});
      this.notificationService.createNotification(
        notificationTypes.success,
        'Successfully added new Bank'
      );
    } catch (e: any) {
      this.notificationService.createNotification(
        notificationTypes.error,
        e.message
      );
    }
  }

  private validateTruckInput() {

  }

  private validateBankInput() {
    // throw new Error('Name Input is not correct...');
  }

  private validateDriversInput() {

  }
}
