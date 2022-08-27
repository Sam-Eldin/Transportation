import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {NAVIGATION_URLS} from "../../navigating.urls";
import {FirebaseService} from "../../services/firebase.service";
import {NotificationService, notificationTypes} from "../../services/notification.service";

@Component({
  selector: 'authentication-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  email: string = '';
  password: string = '';

  constructor(private router: Router,
              private notificationService: NotificationService,
              private firebaseService: FirebaseService) {
  }

  ngOnInit(): void {
  }

  async handleSignIn() {
    try {
      await this.firebaseService.authentication.login(this.email, this.password);
    } catch (e: any) {
      this.notificationService.createNotification(
        notificationTypes.error,
        e.message
      )
    }
  }

  async changePage(number: number) {
    switch (number) {
      case 2: {
        await this.router.navigateByUrl(NAVIGATION_URLS.SIGN_UP);
        break;
      }
      case 3: {
        await this.router.navigateByUrl(NAVIGATION_URLS.RESET_PASSWORD);
        break;
      }
    }
  }
}
