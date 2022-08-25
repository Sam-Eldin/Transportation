import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";
import {GridApi} from "ag-grid-community";
import {NotificationService, notificationTypes} from "../../services/notification.service";
import {ValidatorService} from "../../services/validator.service";

export interface IAddDialogData {
  gridApi: GridApi;
  domain: 'Banks' | 'Trucks' | 'Drivers' | 'Branches' | 'Products'
}

interface Banks {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-add-dialog',
  templateUrl: './add-dialog.component.html',
  styleUrls: ['./add-dialog.component.css']
})
export class AddDialogComponent implements OnInit {
  public bankData = {Name: '', Number: '', Account: '', Balance: ''};
  public truckData = {PlateNumber: '', Type: '', Year: '', Distance: ''};
  public driverData = {Id: '', FirstName: '', LastName: '', Date: '', Phone: '', Age: '', Home: '', Truck: ''};
  public branchData = {Id: '', Location: '', Name: '', ManagerName: '', Phone: ''};
  public productData = {Category: '', Name: '', Size: {height: '',
      width: '',
      length: '',
      weight: ''},
    Description: '', Price: ''};
  public title: string = '';

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

  constructor(@Inject(MAT_DIALOG_DATA) public data: IAddDialogData
    , private notificationService: NotificationService, private matDialog: MatDialog, private validatorService: ValidatorService) {
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

  private checkIfItemAlreadyExist(id: string, field: string, errorMessage: string) {
    let flag = false;
    this.data.gridApi.forEachNode((node) => {
      if (!flag) {
        flag = node.data[field] === id;
      }
    });
    if (flag)
      throw new Error(errorMessage);
  }

  validate() {
    switch (this.data.domain) {
      case "Trucks":
        this.validatorService.validateTruckInput(this.truckData);
        this.checkIfItemAlreadyExist(this.truckData.PlateNumber, 'PlateNumber', 'Truck already exists');
        this.title = "Truck";
        break;
      case "Banks":
        this.validatorService.validateBankInput(this.bankData);
        this.checkIfItemAlreadyExist(this.bankData.Number, 'Number', 'Bank already exists');
        this.checkIfItemAlreadyExist(this.bankData.Name, 'Name', 'Bank already exists');
        this.title = "Bank account";
        break;
      case "Drivers":
        this.validatorService.validateDriversInput(this.driverData);
        this.checkIfItemAlreadyExist(this.driverData.Id, 'Id', 'Driver already exists');
        this.title = "Driver";
        break;
      case "Branches":
        this.validatorService.validateBranchesInput(this.branchData);
        this.checkIfItemAlreadyExist(this.branchData.Id, 'Id', 'Branch already exists');
        this.title = "Branches";
        break;
      case "Products":
        this.validatorService.validateProductsInput(this.productData);
        this.title = "Products";
        break;
    }
  }

  add() {
    try {
      this.validate();
      switch (this.data.domain) {
        case "Banks":
          this.data.gridApi.applyTransaction({add: [this.bankData]});
          break;
        case "Trucks":
          this.data.gridApi.applyTransaction({add: [this.truckData]});
          break;
        case "Drivers":
          this.data.gridApi.applyTransaction({add: [this.driverData]});
          break;
        case "Branches":
          this.data.gridApi.applyTransaction({add: [this.branchData]});
          break;
        case "Products":
          this.data.gridApi.applyTransaction({add: [this.productData]});
          break;
      }
      this.notificationService.createNotification(
        notificationTypes.success,
        `Successfully added new ${this.data.domain}`
      );
      this.matDialog.closeAll();
    } catch (e: any) {
      this.notificationService.createNotification(
        notificationTypes.error,
        e.message
      );
    }
  }
}
