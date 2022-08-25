import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CompanyComponent} from './company/company.component';
import {CustomerComponent} from './customer/customer.component';
import {MaterialModule} from '../material.module';
import {ToastContainerModule, ToastrModule} from "ngx-toastr";
import {OverlayModule} from "@angular/cdk/overlay";
import {DriversComponent} from './company/drivers/drivers.component';
import {TrucksComponent} from './company/trucks/trucks.component';
import {BanksComponent} from './company/banks/banks.component';
import {OrdersComponent} from './company/orders/orders.component';
import {CalendarComponent} from './company/calendar/calendar.component';
import {AgGridModule} from "ag-grid-angular";
import {RemoveDialogComponent} from './company/remove-dialog/remove-dialog.component';
import {AddDialogComponent} from './company/add-dialog/add-dialog.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CustomerOrdersComponent} from "./customer/orders/orders.component";
import {BranchesComponent} from "./company/branches/branches.component";
import {ProductsComponent} from "./company/products/products.component";
import {SignUpComponent} from "./authentication/sign-up/sign-up.component";
import {SignInComponent} from "./authentication/sign-in/sign-in.component";
import {ResetPasswordComponent} from "./authentication/reset-password/reset-password.component";
import {LoadingComponent} from "./loading/loading.component";
import {ScheduleAllModule} from "@syncfusion/ej2-angular-schedule";
import {CustomerProductsComponent} from './customer/products/customer-products.component';
import {CardComponent} from './customer/products/card/card.component';
import {ToolbarComponent} from './customer/products/toolbar/toolbar.component';
import { CardDialogComponent } from './customer/products/card-dialog/card-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    CompanyComponent,
    CustomerComponent,
    DriversComponent,
    TrucksComponent,
    BanksComponent,
    ProductsComponent,
    OrdersComponent,
    CustomerProductsComponent,
    BranchesComponent,
    CustomerOrdersComponent,
    CalendarComponent,
    RemoveDialogComponent,
    AddDialogComponent,
    CustomerProductsComponent,
    CardComponent,
    AddDialogComponent,
    SignUpComponent,
    SignInComponent,
    ResetPasswordComponent,
    LoadingComponent,
    ToolbarComponent,
    CardDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    ToastrModule.forRoot(
      {
        preventDuplicates: true,
        autoDismiss: true,
        positionClass: 'toast-top-center',
      }
    ),
    ToastContainerModule, OverlayModule, AgGridModule, FormsModule, ToastrModule, ReactiveFormsModule, ScheduleAllModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
