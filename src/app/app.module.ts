import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompanyListComponent } from './company-list/company-list.component';
import { HttpClientModule } from '@angular/common/http';
import { CompanyAddComponent } from './company-add/company-add.component';
import { ReactiveFormsModule, FormArray } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { CompanyPreviewComponent } from './company-preview/company-preview.component';
import { InvoiceListComponent } from './invoice-list/invoice-list.component';
import { InvoiceAddComponent } from './invoice-add/invoice-add.component';
import { InvoicePreviewComponent } from './invoice-preview/invoice-preview.component';

@NgModule({
  declarations: [
    AppComponent,
    CompanyListComponent,
    CompanyAddComponent,
    CompanyPreviewComponent,
    InvoiceListComponent,
    InvoiceAddComponent,
    InvoicePreviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
