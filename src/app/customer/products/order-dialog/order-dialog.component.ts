import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";
import {ICardData} from "../common/card.interface,ts";
import {NotificationService, notificationTypes} from "../../../services/notification.service";
import {ValidatorService} from "../../../services/validator.service";
import {UserService} from "../../../services/user.service";
import {formatDate} from "@angular/common";

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

  ngOnInit(): void {
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
}
