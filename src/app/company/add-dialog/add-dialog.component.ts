import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {GridApi} from "ag-grid-community";
import {NotificationService, notificationTypes} from "../../services/notification.service";

const NameRegex = /[a-zA-Z][a-zA-Z ]+/;
const NumberRegex = /^[0-9]\d*$/;
const phoneRegex = /^(0([2-468-9]\d{7}|[5|7]\d{8}))$/;
const dateRegex = /^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$/;

export interface IAddDialogData {
  gridApi: GridApi;
  domain: 'Banks' | 'Trucks' | 'Drivers' | 'Branches' | 'Products'
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
  public bankData = {Name: '', Number: ''};
  public truckData = {PlateNumber: '', Type: '', Year: '', Distance: ''};
  public driverData = {Id: '', FirstName: '', LastName: '', Date: '', Phone: '', Age: '', Home: '', Truck: ''};
  public branchData = {Id: '', Location: '', Name: '', ManagerName: '', Phone: ''};
  public productData = {Category: '', Name: '', Size: '', Description: '', Price: ''};
  public title: string='';

  // banks: Banks[] = [
  //   { value: 'bank-yahav', viewValue: 'bank yahuv'},
  //   { value: 'bank-hadoar', viewValue: 'bank hadoar'},
  //   { value: 'bank-leumi', viewValue: 'bank leumi'},
  //   { value: 'bank-discount', viewValue: 'bank discount'},
  //   { value: 'bank-haboalim', viewValue: 'bank haboalim'},
  //   { value: 'bank-union', viewValue: 'bank union'},
  //   { value: 'bank-otsar', viewValue: 'bank otsar'},
  //   { value: 'bank-mercantile', viewValue: 'bank mercantile'},
  //   { value: 'bank-mizrahi', viewValue: 'bank mizrahi'},
  //   { value: 'bank-citi', viewValue: 'bank citi'},
  //   { value: 'bank-hsbc', viewValue: 'bank hsbc'},
  //   { value: 'bank-ubank', viewValue: 'bank ubank'},
  //   { value: 'bank-bnpparibas', viewValue: 'bank bnpparibas'},
  //   { value: 'bank-fibi', viewValue: 'bank fibi'},
  //   { value: 'bank-israel-arabs', viewValue: 'bank israel-arabs'},
  //   { value: 'bank-sbi', viewValue: 'bank sbi'},
  //   { value: 'bank-massad', viewValue: 'bank massad'},
  //   { value: 'bank-slika', viewValue: 'bank slika'},
  //   { value: 'bank-jerusalim', viewValue: 'bank jerusalim'},
  //   { value: 'bank-muni', viewValue: 'bank muni'},
  //   { value: 'bank-boi', viewValue: 'bank boi'},
  //
  // ];
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
      case "Branches":
        this.title = "Branches";
        break;
      case "Products":
        this.title = "Products";
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
      case "Branches": this.validateBranchesInput();
        this.title = "Branches";
        break;
      case "Products": this.validateProductsInput();
        this.title = "Products";
        break;
    }
  }

  add() {
    try {
      this.validate();
      // const data = this.data.domain === "Banks" ? this.bankData :
      //   this.data.domain === "Drivers" ? this.driverData : this.truckData;
      switch (this.data.domain) {
        case "Banks":
          this.data.gridApi.applyTransaction({add: [this.bankData]});
          this.notificationService.createNotification(
            notificationTypes.success,
            'Successfully added new Bank'
          );
          break;
        case "Trucks":
          this.data.gridApi.applyTransaction({add: [this.truckData]});
          this.notificationService.createNotification(
            notificationTypes.success,
            'Successfully added new Truck'
          );
          break;
        case "Drivers":
          this.data.gridApi.applyTransaction({add: [this.driverData]});
          this.notificationService.createNotification(
            notificationTypes.success,
            'Successfully added new Driver'
          );
          break;
        case "Branches":
          this.data.gridApi.applyTransaction({add: [this.branchData]});
          this.notificationService.createNotification(
            notificationTypes.success,
            'Successfully added new branch'
          );
          break;
        case "Products":
          this.data.gridApi.applyTransaction({add: [this.productData]});
          this.notificationService.createNotification(
            notificationTypes.success,
            'Successfully added new product'
          );
          break;
      }
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
    if(this.bankData.Name === '' || this.bankData.Number === '')
      throw new Error('Input is Empty...');
    this.validateName(this.bankData.Name);
    this.validateNumber(this.bankData.Number);
    if(this.bankData.Number.length > 2) throw new Error('Number should be 1-99');
  }

  private validateDriversInput() {
    if(this.driverData.Id === '' || this.driverData.FirstName === '' || this.driverData.LastName === ''
     || this.driverData.Age === '' || this.driverData.Phone === '' || this.driverData.Date === ''
    || this.driverData.Truck === '' || this.driverData.Home === '')
      throw new Error('Input is Empty...');
    this.validateNumber(this.driverData.Id);
    this.validateName(this.driverData.FirstName);
    this.validateName(this.driverData.LastName);
    this.validatePhoneNumber(this.driverData.Phone);
    this.validateNumber(this.driverData.Age);
    this.validateDate(this.driverData.Date);
  }

  private validateBranchesInput() {

  }

  private validateProductsInput() {

  }

  private validateName(Name : string){
    if (!NameRegex.test(Name)) throw new Error('Name format is not correct');
  }
  private validateNumber(Number : string){
    if (!NumberRegex.test(Number)) throw new Error('Number format is not correct');
  }
  private validatePhoneNumber(PhoneNumber: string) {
    if (!phoneRegex.test(PhoneNumber)) throw new Error('Phone format is not correct');
  }
  private validateDate(Date : string){
    if(!dateRegex.test(Date)) throw new Error('date format is not correct');
  }
}
