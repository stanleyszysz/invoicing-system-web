import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyAddComponent } from './company-add/company-add.component';
import { CompanyListComponent } from './company-list/company-list.component';
import { CompanyPreviewComponent } from './company-preview/company-preview.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
