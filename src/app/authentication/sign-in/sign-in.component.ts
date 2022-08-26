import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {NAVIGATION_URLS} from "../../navigating.urls";

@Component({
  selector: 'authentication-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  password: string = '';
  email: string = '';

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  async handleSignIn() {

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
