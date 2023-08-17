import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";
import {ICardData} from "../common/card.interface,ts";
import {NotificationService, notificationTypes} from "../../../services/notification.service";
import {ValidatorService} from "../../../services/validator.service";
import {UserService} from "../../../services/user.service";
import {formatDate} from "@angular/common";
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-order-dialog',
  templateUrl: './order-dialog.component.html',
  styleUrls: ['./order-dialog.component.css']
})
export class OrderDialogComponent implements OnInit {
  public creditCardNumber: string = '';
  public creditCardCVV: string = '';
  public creditCardDate: string = '';
  public phoneNumber: string = '';
  public location: string = '';
  public destination: string = '';
  public orderDate: string = '';
  // public destination: string = '';
  constructor(@Inject(MAT_DIALOG_DATA) public data: { cardData: ICardData },
              private matDialog: MatDialog,
              private validatorService: ValidatorService,
              private notificationService: NotificationService,
              private userService: UserService) { }
              exform!: UntypedFormGroup;
              private readonly NameRegex = /[a-zA-Z][a-zA-Z ]+/;
              private readonly NumberRegex = /^[0-9]{3,4}$/;
              private readonly phoneRegex = /^(0([2-468-9]\d{7}|[5|7]\d{8}))$/;
              private readonly dateRegex = /^(0[1-9]|[12]\d|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$/;
              private readonly numberCardRegex = /^(?:4\d{12}(?:\d{3})?|[25][1-7]\d{14}|6(?:011|5\d\d)\d{12}|3[47]\d{13}|3(?:0[0-5]|[68]\d)\d{11}|(?:2131|1800|35\d{3})\d{11})$/;
              private readonly dateCardRegex = /^(0[1-9]|1[012])[- /.](20)\d\d$/;


  ngOnInit(): void {
    this.exform = new UntypedFormGroup({
      'creditCardNumber' : new UntypedFormControl(null, [Validators.required, Validators.pattern(this.numberCardRegex)]),
      'creditCardDate' : new UntypedFormControl(null, [Validators.required, Validators.pattern(this.dateCardRegex)]),
      'creditCardCVV' : new UntypedFormControl(null, [Validators.required, Validators.pattern(this.NumberRegex)]),
      'name' : new UntypedFormControl(null, [Validators.required, Validators.pattern(this.NameRegex)]),
      'date' : new UntypedFormControl(null, [Validators.required, Validators.pattern(this.dateRegex)]),
      'phoneNumber' : new UntypedFormControl(null, [Validators.required, Validators.pattern(this.phoneRegex)]),
    })
  }

  validate(){
    this.validatorService.validateCardNumber(this.creditCardNumber);
    this.validatorService.validateCardDate(this.creditCardDate);
    this.validatorService.validateCVV(this.creditCardCVV);
    this.validatorService.validateDate(this.orderDate);
    this.validatorService.validateName(this.location);
    this.validatorService.validateName(this.destination);
    this.validatorService.validatePhoneNumber(this.phoneNumber);
  }

  async add() {
    try {
      this.validate();
      this.notificationService.createNotification(
        notificationTypes.info, 'Processing request'
      );
      await this.userService.addNewOrder({
        creditCardNumber: this.creditCardNumber,
        creditCardDate: this.creditCardDate,
        creditCardCVV: this.creditCardCVV,
        Receive_Date: this.orderDate,
        To: this.destination,
        From: this.location,
        phoneNumber: this.phoneNumber,
        Company: this.data.cardData.Company.toLowerCase(),
        Name: this.data.cardData.Name,
        Price: this.data.cardData.Price,
        Order_Date: `${formatDate(Date.now(), 'dd/MM/yyyy', 'en-GB')}`,
        Email: this.userService.userEmail.toLowerCase(),
        Status: 0
      })
      this.notificationService.createNotification(
        notificationTypes.success,
        `Successfully Ordered`
      );
      this.matDialog.closeAll();
    } catch (e: any) {
      this.notificationService.createNotification(
        notificationTypes.error,
        e.message
      );
    }
  }
  get cardNumber(){
    return this.exform.get('creditCardNumber');
  }
  get cardDate(){
    return this.exform.get('creditCardDate');
  }
  get cardCVV(){
    return this.exform.get('creditCardCVV');
  }
  get OrderDate(){
    return this.exform.get('orderDate');
  }
  get Destination(){
    return this.exform.get('destination');
  }
  get Location(){
    return this.exform.get('location');
  }
  get PhoneNumber(){
    return this.exform.get('phoneNumber');
  }
}
