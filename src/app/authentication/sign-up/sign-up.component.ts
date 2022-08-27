import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {NAVIGATION_URLS} from "../../navigating.urls";
import {NotificationService, notificationTypes} from "../../services/notification.service";
import {FirebaseService} from "../../services/firebase.service";
import firebase from "firebase/compat";
import AuthError = firebase.auth.AuthError;

@Component({
  selector: 'authentication-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  strongPassword;
  mediumPassword;
  passwordStrength = 0;

  constructor(private router: Router,
              private notificationService: NotificationService,
              private firebaseService: FirebaseService) {
    this.strongPassword = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})");
    this.mediumPassword = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");
  }

  ngOnInit(): void {

  }

  async changePage(number: number = 0) {
    switch (number) {
      case 1: {
        await this.router.navigateByUrl(NAVIGATION_URLS.SIGN_IN);
        break;
      }
      case 3: {
        await this.router.navigateByUrl(NAVIGATION_URLS.RESET_PASSWORD);
        break;
      }
    }
  }


  async handleSignup() {
    try{
      if (this.password !== this.confirmPassword) {
        this.notificationService.createNotification(notificationTypes.error, 'Passwords do not match');
        return;
      }
      this.notificationService.createNotification(notificationTypes.info, 'Creating account');
      await this.firebaseService.createAccount(this.email, this.password);
      this.notificationService.createNotification(notificationTypes.success, 'Account been created');
    } catch (e: AuthError | any) {
      switch (e.code) {
        case 'auth/invalid-email': this.notificationService.createNotification(notificationTypes.error, 'Invalid email'); break;
        case 'auth/weak-password': this.notificationService.createNotification(notificationTypes.error, 'Week password'); break;
        case 'auth/email-already-in-use': this.notificationService.createNotification(notificationTypes.error, 'Email already exist'); break;
        default: this.notificationService.createNotification(notificationTypes.error, e.code); break;
      }
    }
  }

  passwordChange() {
    const progressbar = document.getElementById('passwordStrength');
    if (this.password === '') {
      this.passwordStrength = 0;
      return;
    }
    if (progressbar) {
      if (this.strongPassword.test(this.password)) {
        this.passwordStrength = 100;
        progressbar.className = `progress-bar bg-success`;
      } else if (this.mediumPassword.test(this.password)) {
        this.passwordStrength = 50;
        progressbar.className = `progress-bar bg-warning`;
      } else {
        this.passwordStrength = 25;
        progressbar.className = `progress-bar bg-danger`;
      }
    }
  }
}
