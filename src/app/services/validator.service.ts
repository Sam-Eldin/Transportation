import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {
  private readonly NameRegex = /[a-zA-Z][a-zA-Z ]+/;
  private readonly NumberRegex = /^\d*$/;
  private readonly phoneRegex = /^(0([2-468-9]\d{7}|[5|7]\d{8}))$/;
  private readonly dateRegex = /^(0[1-9]|[12]\d|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$/;
  private readonly numberCardRegex = /^([0-9][0-9][0-9][0-9])[- /.]([0-9][0-9][0-9][0-9])[- /.]([0-9][0-9][0-9][0-9])[- /.]([0-9][0-9][0-9][0-9])\d\d$/;
  private readonly dateCardRegex = /^(0[1-9]|1[012])[- /.](19|20)\d\d$/;


  constructor() {

  }

  public validateTruckInput(truckData: any) {
    if (truckData.PlateNumber === '' || truckData.Type === ''
      || truckData.Year === '' || truckData.Distance === '')
      throw new Error('Input is Empty...');
    this.validateNumber(truckData.PlateNumber);
    this.validateName(truckData.Type);
    this.validateNumber(truckData.Year);
    this.validateNumber(truckData.Distance);
  }

  public validateBankInput(bankData: any) {
    if (bankData.Name === '' || bankData.Number === '' || bankData.Account === ''
      || bankData.Balance === '')
      throw new Error('Input is Empty...');
    this.validateName(bankData.Name);
    this.validateNumber(bankData.Number);
    this.validateNumber(bankData.Account);
    this.validateNumber(bankData.Balance);
    if (bankData.Number.length > 2) throw new Error('Bank Number should be 1-99');
    if (bankData.Account.length > 6) throw new Error('Number should be 6 digits');
  }

  public validateDriversInput(driverData: any) {
    if (driverData.Id === '' || driverData.FirstName === '' || driverData.LastName === ''
      || driverData.Age === '' || driverData.Phone === '' || driverData.Date === ''
      || driverData.Truck === '' || driverData.Home === '')
      throw new Error('Input is Empty...');
    this.validateNumber(driverData.Id);
    if (driverData.Id.length != 9) throw new Error('id length should be 9 digits');
    this.validateName(driverData.FirstName);
    this.validateName(driverData.LastName);
    this.validatePhoneNumber(driverData.Phone);
    this.validateNumber(driverData.Age);
    this.validateDate(driverData.Date);
  }

  public validateBranchesInput(branchData: any) {
    if (branchData.Id === '' || branchData.Location === '' || branchData.Name === ''
      || branchData.ManagerName === '' || branchData.Phone === '')
      throw new Error('Input is Empty...');
    this.validateNumber(branchData.Id);
    this.validateName(branchData.Name);
    this.validateName(branchData.ManagerName);
    this.validatePhoneNumber(branchData.Phone);
  }

  public validateProductsInput(productData: any) {
    if (productData.Category === '' || productData.Name === '' || productData.Size === ''
      || productData.Description === '' || productData.Price === '')
      throw new Error('Input is Empty...');
    this.validateName(productData.Category);
    this.validateName(productData.Name);
    this.validateNumber(productData.Price);
  }

  public validateName(Name: string) {
    if (!this.NameRegex.test(Name)) throw new Error('Name format is not correct');
  }

  public validateNumber(Number: string) {
    if (!this.NumberRegex.test(Number)) throw new Error('Number format is not correct');
  }

  public validatePhoneNumber(PhoneNumber: string) {
    if (!this.phoneRegex.test(PhoneNumber)) throw new Error('Phone format is not correct');
  }

  public validateDate(Date: string) {
    if (!this.dateRegex.test(Date)) throw new Error('date format is not correct');
  }
  public validateCardNumber(Number: string){
    if (!this.numberCardRegex.test(Number)) throw new Error('date format is not correct');
  }
  public validateCardDate(Date: string){
    if (!this.dateCardRegex.test(Date)) throw new Error('date format is not correct');
  }
  public validateCVV(cvv: string) {
    if (!(cvv.length === 3)) throw new Error('CVV Is not correct');
    this.validateNumber(cvv);
  }
}
