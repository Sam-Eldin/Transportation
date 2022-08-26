import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {NAVIGATION_URLS} from "../../navigating.urls";

@Component({
  selector: 'authentication-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  email: string = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  async handleResetPassword() {

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
