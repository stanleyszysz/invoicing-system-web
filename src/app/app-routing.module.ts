import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyAddComponent } from './company-add/company-add.component';
import { CompanyListComponent } from './company-list/company-list.component';
import { CompanyPreviewComponent } from './company-preview/company-preview.component';
import { InvoiceAddComponent } from './invoice-add/invoice-add.component';
import { InvoiceListComponent } from './invoice-list/invoice-list.component';
import { InvoicePreviewComponent } from './invoice-preview/invoice-preview.component';

const routes: Routes = [
  {
    path: "companies",
    children: [
      {
        path: "new",
        component: CompanyAddComponent
      },
      {
        path: ':companyId',
        component: CompanyPreviewComponent
      },
      {
        path: "",
        component: CompanyListComponent
      }
    ]
  },
  {
    path: "invoices",
    children: [
      {
        path: "new",
        component: InvoiceAddComponent
      },
      {
        path: ':invoiceId',
        component: InvoicePreviewComponent
      },
      {
        path: "",
        component: InvoiceListComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
