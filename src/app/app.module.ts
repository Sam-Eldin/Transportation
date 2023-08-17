import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from '../material.module';
import {ToastContainerModule, ToastrModule} from "ngx-toastr";
import {OverlayModule} from "@angular/cdk/overlay";
import {AgGridModule} from "ag-grid-angular";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ScheduleAllModule} from "@syncfusion/ej2-angular-schedule";
import {RouterModule, Routes} from "@angular/router";
import {ROUTES} from "./app.routing";


// ------------ Components ------------
// Loading
import {LoadingComponent} from "./loading/loading.component";

// Authentication
import {SignUpComponent} from "./authentication/sign-up/sign-up.component";
import {SignInComponent} from "./authentication/sign-in/sign-in.component";
import {ResetPasswordComponent} from "./authentication/reset-password/reset-password.component";

// Company
import {CompanyComponent} from './company/company.component';
import {DriversComponent} from './company/drivers/drivers.component';
import {TrucksComponent} from './company/trucks/trucks.component';
import {BanksComponent} from './company/banks/banks.component';
import {OrdersComponent} from './company/orders/orders.component';
import {CalendarComponent} from './company/calendar/calendar.component';
import {RemoveDialogComponent} from './company/remove-dialog/remove-dialog.component';
import {AddDialogComponent} from './company/add-dialog/add-dialog.component';
import {BranchesComponent} from "./company/branches/branches.component";
import {ProductsComponent} from "./company/products/products.component";

// Customer
import {CustomerComponent} from './customer/customer.component';
import {CustomerOrdersComponent} from "./customer/orders/orders.component";
import {CustomerProductsComponent} from './customer/products/customer-products.component';
import {CardComponent} from './customer/products/card/card.component';
import {ToolbarComponent} from './customer/products/toolbar/toolbar.component';
import {CardDialogComponent} from './customer/products/card-dialog/card-dialog.component';
import {OrderDialogComponent} from "./customer/products/order-dialog/order-dialog.component";
import {HttpClientModule} from "@angular/common/http";
import {MatNativeDateModule} from "@angular/material/core";

const routes: Routes = ROUTES;
@NgModule({
  declarations: [
    AppComponent,
    CompanyComponent,
    AddDialogComponent,
    RemoveDialogComponent,
    OrdersComponent,
    CalendarComponent,
    DriversComponent,
    TrucksComponent,
    BanksComponent,
    CustomerComponent,
    ToolbarComponent,
    CardDialogComponent,
    CardComponent,
    ProductsComponent,
    CustomerProductsComponent,
    LoadingComponent,
    ResetPasswordComponent,
    SignInComponent,
    SignUpComponent,
    BranchesComponent,
    CustomerOrdersComponent,
    OrderDialogComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    ToastrModule.forRoot(
      {
        preventDuplicates: true,
        autoDismiss: true,
        positionClass: 'toast-top-center',
      }
    ),
    ToastContainerModule, OverlayModule, AgGridModule, FormsModule, ToastrModule, ReactiveFormsModule, ScheduleAllModule, RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
