import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CompanyAddModel } from '../model/company.add.model';
import { AddressModel } from '../model/address.model';
import { CompanyService } from '../services/company.service';

@Component({
  selector: 'app-company-preview',
  templateUrl: './company-preview.component.html',
  styleUrls: ['./company-preview.component.scss']
})
export class CompanyPreviewComponent implements OnInit {

  companyId: string | null = null
  company: CompanyAddModel = {
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

  constructor(private activatedRoute: ActivatedRoute, private companyService: CompanyService, private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.companyId = this.activatedRoute.snapshot.paramMap.get('companyId')

    if (this.companyId != null) {
      this.companyService.get(this.companyId).subscribe(data => {
        this.company = data;
      }, error => {
        this.toastrService.error("Nothing to do")})
    }
    
  }

}
