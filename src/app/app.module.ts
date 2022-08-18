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
import { OrdersComponent } from './company/orders/orders.component';
import { CalendarComponent } from './company/calendar/calendar.component';
import {AgGridModule} from "ag-grid-angular";
import { RemoveDialogComponent } from './company/remove-dialog/remove-dialog.component';
import { AddDialogComponent } from './company/add-dialog/add-dialog.component';
import {FormsModule} from "@angular/forms";
import {CustomerOrdersComponent} from "./customer/orders/orders.component";

@NgModule({
  declarations: [
    AppComponent,
    CompanyComponent,
    CustomerComponent,
    DriversComponent,
    TrucksComponent,
    BanksComponent,
    OrdersComponent,
    ProductsComponent,
    BranchesComponent,
    CustomerOrdersComponent,
    CalendarComponent,
    RemoveDialogComponent,
    AddDialogComponent,
    SignUpComponent,
    SignInComponent,
    ResetPasswordComponent,
    LoadingComponent
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
        ToastContainerModule, OverlayModule, AgGridModule, FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
