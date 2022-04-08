import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { InvoiceService } from '../services/invoice.service';

@Component({
  selector: 'app-invoice-add',
  templateUrl: './invoice-add.component.html',
  styleUrls: ['./invoice-add.component.scss']
})
export class InvoiceAddComponent implements OnInit {

  invoiceAddFormGroup: FormGroup 

  constructor(private invoiceService: InvoiceService, private formBuilder: FormBuilder, private toastrService: ToastrService, private router: Router) { 
    this.invoiceAddFormGroup = this.formBuilder.group( {
      dateAt: ['', Validators.required],
      number: ['', Validators.required],
      seller: this.formBuilder.group( {
        taxIdentifier: ['', Validators.required],
        name: ['', Validators.required],
        address: this.formBuilder.group( {
            city: ['', Validators.required],
            postalCode: ['', Validators.required],
            streetName: ['', Validators.required],
            streetNumber: ['', Validators.required]
          }),
        pensionInsurance: ['', Validators.required],
        healthInsurance: ['', Validators.required]
        }),
      buyer: this.formBuilder.group( {
        taxIdentifier: ['', Validators.required],
        name: ['', Validators.required],
        address: this.formBuilder.group( {
          city: ['', Validators.required],
          postalCode: ['', Validators.required],
          streetName: ['', Validators.required],
          streetNumber: ['', Validators.required]
          }),
        pensionInsurance: ['', Validators.required],
        healthInsurance: ['', Validators.required]
        }),
      entries: this.formBuilder.array( [
        this.formBuilder.group( {
          description: ['', Validators.required],
          price: ['', Validators.required],
          vatValue: ['', Validators.required],
          vatRate: ['', Validators.required],
          carRelatedExpense: this.formBuilder.group( {
            registrationNumber: ['', Validators.required],
            personalUsage: ['', Validators.required]
          })
        })
      ])
    })
  }

  ngOnInit(): void {
  }

  save() {
    this.invoiceService.save(this.invoiceAddFormGroup.getRawValue()).subscribe(data => {
      this.toastrService.success("Invoice saved!")
      this.router.navigate(['invoices'])
    }, error => {
      this.toastrService.error("Something goes wrong!")
    })
  }

  navigateToInvoiceList() {
    this.router.navigate(['invoices'])
  }

  get entries() {
    return this.invoiceAddFormGroup.get('entries') as FormArray;
  }

  addEntry() {
    // this.entries.push(this.fb.control(''));
    // this.entries.push(this.fb.control( {
    (<FormArray>this.invoiceAddFormGroup.get('entries')).push(this.formBuilder.group( {
      description: '',
      price: '',
      vatValue: '',
      vatRate: '',
      carRelatedExpense: this.formBuilder.group( {
        registrationNumber: ['', Validators.required],
        personalUsage: ['', Validators.required]
        })
      }
    ));
  }

}
