import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {GridApi} from "ag-grid-community";
import {NotificationService, notificationTypes} from "../../services/notification.service";

export interface IAddDialogData {
  gridApi: GridApi;
  domain: 'Banks' | 'Trucks' | 'Drivers';
}

interface Banks{
  value: string;
  viewValue: string;
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
  public title: string='';

  banks: Banks[] = [
    { value: 'bank-yahav', viewValue: 'bank yahuv'},
    { value: 'bank-hadoar', viewValue: 'bank hadoar'},
    { value: 'bank-leumi', viewValue: 'bank leumi'},
    { value: 'bank-discount', viewValue: 'bank discount'},
    { value: 'bank-haboalim', viewValue: 'bank haboalim'},
    { value: 'bank-union', viewValue: 'bank union'},
    { value: 'bank-otsar', viewValue: 'bank otsar'},
    { value: 'bank-mercantile', viewValue: 'bank mercantile'},
    { value: 'bank-mizrahi', viewValue: 'bank mizrahi'},
    { value: 'bank-citi', viewValue: 'bank citi'},
    { value: 'bank-hsbc', viewValue: 'bank hsbc'},
    { value: 'bank-ubank', viewValue: 'bank ubank'},
    { value: 'bank-bnpparibas', viewValue: 'bank bnpparibas'},
    { value: 'bank-fibi', viewValue: 'bank fibi'},
    { value: 'bank-israel-arabs', viewValue: 'bank israel-arabs'},
    { value: 'bank-sbi', viewValue: 'bank sbi'},
    { value: 'bank-massad', viewValue: 'bank massad'},
    { value: 'bank-slika', viewValue: 'bank slika'},
    { value: 'bank-jerusalim', viewValue: 'bank jerusalim'},
    { value: 'bank-muni', viewValue: 'bank muni'},
    { value: 'bank-boi', viewValue: 'bank boi'},

  ];
  // private driverData: IDriverData = {Id: '', Age: 0, Date: '', Home: '', Phone};
  // private truckData: ITruckData = {};
  constructor(@Inject(MAT_DIALOG_DATA) public data: IAddDialogData
  , private notificationService: NotificationService) {
    switch (this.data.domain) {
      case "Trucks":
        this.title = "Truck";
        break;
      case "Banks":
        this.title = "Bank";
        break;
      case "Drivers":
        this.title = "Driver";
        break;
    }
  }

  ngOnInit(): void {
  }

  validate() {
    switch (this.data.domain) {
      case "Trucks": this.validateTruckInput();
      this.title = "Truck";
        break;
      case "Banks": this.validateBankInput();
        this.title = "Bank account";
      break;
      case "Drivers": this.validateDriversInput();
        this.title = "Driver";
      break;
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
