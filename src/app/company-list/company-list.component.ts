import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompanyService } from '../services/company.service';
import { CompanyListModel } from '../model/company.list.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss']
})
export class CompanyListComponent implements OnInit {

  companies: Array<CompanyListModel> = []

  constructor(private companyService: CompanyService, private router: Router, private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.getAllCompanies();
  }

  private getAllCompanies() {
    this.companyService.getAllCompanies().subscribe(data => {
      this.companies = data
    }, error => {
      alert(error.error)
    })
  }

  navigateToAddCompanyForm() {
    this.router.navigate(['companies', 'new'])
  }

  navigateToCompanyPreview(companyId: string) {
    this.router.navigate(['companies', companyId])
  }

}
