import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {NAVIGATION_URLS} from "../../navigating.urls";
import {FirebaseService} from "../../services/firebase.service";
import {NotificationService, notificationTypes} from "../../services/notification.service";

@Component({
  selector: 'authentication-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  email: string = '';

  constructor(private router: Router,
              private firebaseService: FirebaseService,
              private notificationService: NotificationService) {
  }

  ngOnInit(): void {
  }

  async handleResetPassword() {
    try {
      this.notificationService.createNotification(notificationTypes.info, 'Sending Email');
      await this.firebaseService.authentication.resetPassword(this.email);
      this.notificationService.createNotification(notificationTypes.success, 'Email Was Sent Successfully');
    } catch (e: any) {
      this.notificationService.createNotification(notificationTypes.error, 'Something went wrong');
    }
  }

  async changePage(number: number) {
    switch (number) {
      case 1: {
        await this.router.navigateByUrl(NAVIGATION_URLS.SIGN_IN);
        break;
      }
      case 2: {
        await this.router.navigateByUrl(NAVIGATION_URLS.SIGN_UP);
        break;
      }
    }
  }
}
