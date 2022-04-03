import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CompanyAddModel } from '../model/company.add.model';
import { CompanyService } from '../services/company.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-company-preview',
  templateUrl: './company-preview.component.html',
  styleUrls: ['./company-preview.component.scss']
})
export class CompanyPreviewComponent implements OnInit {

  companyEditFormGroup: FormGroup;

  companyId: string | null = '';
  company: CompanyAddModel = {
    companyId: '',
    taxIdentifier: '',
    name: '',
    address: {
      city: '',
      postalCode: '',
      streetName: '',
      streetNumber: ''
    },
    pensionInsurance: 0,
    healthInsurance: 0
  }

  constructor(private activatedRoute: ActivatedRoute, private companyService: CompanyService, private toastrService: ToastrService, private formBuilder: FormBuilder, private router: Router) {
    this.companyEditFormGroup = this.formBuilder.group({
    companyId: [{value: '', disabled: true}, []],
    taxIdentifier: ['', [Validators.required, Validators.pattern("^\d{10}$")]],
    name: ['', [Validators.required]],
    address: this.formBuilder.group({
      city: ['', [Validators.required]],
      postalCode: ['', [Validators.required]],
      streetName: ['', [Validators.required]],
      streetNumber: ['', [Validators.required]]
    }),
    pensionInsurance: [0.00, [Validators.required, Validators.pattern("^\d*[.]?\d{0,2}$")]],
    healthInsurance: [0.00, [Validators.required, Validators.pattern("^\d*[.]?\d{0,2}$")]]
    })
   }

  ngOnInit(): void {
    this.companyId = this.activatedRoute.snapshot.paramMap.get('companyId')

    if (this.companyId != null) {
      this.companyService.get(this.companyId).subscribe(data => {
        this.company = data;
        this.companyEditFormGroup.patchValue({...data})
      }, error => {
        this.toastrService.error("Something went wrong")})
    }
    
  }

  edit(companyId: string) {
    this.companyService.edit(companyId, this.companyEditFormGroup.getRawValue()).subscribe(data => {
        this.toastrService.success("Company changed");
        this.router.navigate(['companies'])
      },
      error => {
        this.toastrService.error("Something went wrong")
      })
  }

  delete(companyId: string) {
    this.companyService.delete(companyId).subscribe(data => {
        this.toastrService.success("Company deleted"),
        this.router.navigate(['companies'])
      },
      error => {
        this.toastrService.error("Something went wrong")
      })
  }

  navigateToCompanyList() {
    this.router.navigate(['companies'])
  }

}
