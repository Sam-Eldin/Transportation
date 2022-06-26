import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CompanyComponent } from './company/company.component';
import { CustomerComponent } from './customer/customer.component';
import {MaterialModule} from '../material.module';
import {ToastContainerModule, ToastrModule} from "ngx-toastr";
import {OverlayModule} from "@angular/cdk/overlay";

@NgModule({
  declarations: [
    AppComponent,
    CompanyComponent,
    CustomerComponent
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
    ToastContainerModule, OverlayModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
