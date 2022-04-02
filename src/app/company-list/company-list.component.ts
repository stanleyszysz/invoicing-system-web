import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompanyService } from '../services/company.service';
import { CompanyListModel } from '../model/company.list.model';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss']
})
export class CompanyListComponent implements OnInit {

  companies: Array<CompanyListModel> = []

  constructor(private companyService: CompanyService, private router: Router) { }

  ngOnInit(): void {
    this.fetchData();
  }

  private fetchData() {
    this.companyService.fetchData().subscribe(data => {
      this.companies = data
    }, error => {
      alert(error.error)
    })
  }

  navigateToAddForm() {
    this.router.navigate(['companies', 'new'])
  }

  navigateToPreview(companyId: string) {
    console.log("inside navigate preview " + companyId)
    this.router.navigate(['companies', companyId])
  }

}
