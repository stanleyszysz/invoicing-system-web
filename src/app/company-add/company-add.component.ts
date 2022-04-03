import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CompanyService } from '../services/company.service';

@Component({
  selector: 'app-company-add',
  templateUrl: './company-add.component.html',
  styleUrls: ['./company-add.component.scss']
})
export class CompanyAddComponent implements OnInit {

  companyAddFormGroup: FormGroup 

  constructor(private companyService: CompanyService, private formBuilder: FormBuilder, private toastrService: ToastrService, private router: Router) { 
    this.companyAddFormGroup = this.formBuilder.group({
      taxIdentifier: ['', Validators.required],
      name: ['', Validators.required],
      address: this.formBuilder.group({
        city: ['', Validators.required],
        postalCode: ['', Validators.required],
        streetName: ['', Validators.required],
        streetNumber: ['', Validators.required]
      }),
      pensionInsurance: ['', Validators.required],
      healthInsurance: ['', Validators.required]
      })
  }

  ngOnInit(): void {
  }

  save() {
    this.companyService.save(this.companyAddFormGroup.getRawValue()).subscribe(data => {
      this.toastrService.success("Company saved!")
      this.router.navigate(['companies'])
    }, error => {
      this.toastrService.error("Something goes wrong!")
    })
  }

  navigateToCompanyList() {
    this.router.navigate(['companies'])
  }

}
