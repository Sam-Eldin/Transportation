import {Routes} from "@angular/router";
import {SignInComponent} from "./authentication/sign-in/sign-in.component";
import {SignUpComponent} from "./authentication/sign-up/sign-up.component";
import {ResetPasswordComponent} from "./authentication/reset-password/reset-password.component";
import {CompanyComponent} from "./company/company.component";
import {CustomerComponent} from "./customer/customer.component";
import {NAVIGATION_URLS} from "./navigating.urls";

export const ROUTES: Routes = [
  {path: '', pathMatch: 'full', component: SignInComponent},
  {path: NAVIGATION_URLS.SIGN_UP.slice(1), pathMatch: 'full', component: SignUpComponent},
  {path: NAVIGATION_URLS.RESET_PASSWORD.slice(1), pathMatch: 'full', component: ResetPasswordComponent},
  {path: NAVIGATION_URLS.COMPANY.slice(1), pathMatch: 'full', component: CompanyComponent},
  {path: NAVIGATION_URLS.CUSTOMER.slice(1), pathMatch: 'full', component: CustomerComponent},
  {path: '', redirectTo: NAVIGATION_URLS.SIGN_IN, pathMatch: 'full'}
]
