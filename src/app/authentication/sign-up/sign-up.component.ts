import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {NAVIGATION_URLS} from "../../navigating.urls";

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

  constructor(private router: Router) {
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
    // try{
    //   if (this.password !== this.confirmPassword) {
    //     this.toaster.createToaster(toasterTypes.error, 'Passwords do not match');
    //     return;
    //   }
    //   this.toaster.createToaster(toasterTypes.info, 'Creating account');
    //   await this.firebaseHelper.emailSignup(this.email, this.password);
    //   this.toaster.createToaster(toasterTypes.success, 'Account been created');
    // } catch (e: AuthError | any) {
    //   switch (e.code) {
    //     case 'auth/invalid-email': this.toaster.createToaster(toasterTypes.error, 'Invalid email'); break;
    //     case 'auth/weak-password': this.toaster.createToaster(toasterTypes.error, 'Week password'); break;
    //     case 'auth/email-already-in-use': this.toaster.createToaster(toasterTypes.error, 'Email already exist'); break;
    //     default: this.toaster.createToaster(toasterTypes.error, e.code); break;
    //   }
    // }
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
