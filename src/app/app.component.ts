import {Component, OnInit, ViewChild} from '@angular/core';
import {ToastContainerDirective, ToastrService} from "ngx-toastr";
import {NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router} from "@angular/router";
import {FirebaseService} from "./services/firebase.service";
import firebase from "firebase/compat/app";
import {NAVIGATION_URLS} from "./navigating.urls";
import {UserService} from "./services/user.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild(ToastContainerDirective, {static: true})
  toastContainer: ToastContainerDirective | undefined;
  title = 'Transportation';
  isLoading: boolean = false;

  constructor(private toaster: ToastrService,
              private router: Router,
              private firebaseService: FirebaseService,
              private userService: UserService) {
    this.setOnAuthChange();
    this.setRoutingLoading();
  }


  private setRoutingLoading() {
    this.router.events.subscribe((event) => {
      switch (true) {
        case event instanceof NavigationStart: {
          this.isLoading = true;
          break;
        }

        case event instanceof NavigationEnd:
        case event instanceof NavigationCancel:
        case event instanceof NavigationError: {
          this.isLoading = false;
          break;
        }

        default:
          break;
      }
    });
  }

  private setOnAuthChange() {
    this.firebaseService.authentication.setAuthOnChangeState(async (user: firebase.User | null) => {
      try {
        this.isLoading = true;
        // no user is signed in
        console.log(user);
        if (!user) {
          await this.router.navigateByUrl(NAVIGATION_URLS.SIGN_IN);
          this.isLoading = false;
          return;
        }
        // we have a user
        await this.userService.setUserData();
        if (this.userService.isUserCompanyManager()) {
          await this.router.navigateByUrl(NAVIGATION_URLS.COMPANY);
        } else {
          await this.router.navigateByUrl(NAVIGATION_URLS.CUSTOMER);
        }
        this.isLoading = false;
      } catch (e) {
        this.isLoading = false;
        await this.firebaseService.authentication.logout();
        await this.router.navigateByUrl(NAVIGATION_URLS.SIGN_IN);
      }
    })
  }

  ngOnInit(): void {
    this.toaster.overlayContainer = this.toastContainer;
  }
}
