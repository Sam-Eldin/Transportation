import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";
import {ICardData} from "../common/card.interface,ts";
import {NotificationService, notificationTypes} from "../../../services/notification.service";
import {ValidatorService} from "../../../services/validator.service";

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
  constructor(@Inject(MAT_DIALOG_DATA) public data: { cardData: ICardData },private matDialog: MatDialog, private validatorService: ValidatorService, private notificationService: NotificationService) { }

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

  add() {
    try {
      this.validate();

      this.notificationService.createNotification(
        notificationTypes.success,
        `Successfully added new ${this.data.cardData.Name}`
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
