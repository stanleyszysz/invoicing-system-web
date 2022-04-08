import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InvoiceService } from '../services/invoice.service';
import { InvoiceListModel } from '../model/invoice.list.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-invoice-list',
  templateUrl: './invoice-list.component.html',
  styleUrls: ['./invoice-list.component.scss']
})
export class InvoiceListComponent implements OnInit {

  invoices: Array<InvoiceListModel> = []

  constructor(private invoiceService: InvoiceService, private router: Router, private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.getAllInvoices();
  }

  private getAllInvoices() {
    this.invoiceService.getAllInvoices().subscribe(data => {
      this.invoices = data
    }, error => {
      alert(error.error)
    })
  }

  navigateToAddInvoiceForm() {
    this.router.navigate(['invoices', 'new'])
  }

  navigateToInvoicePreview(invoiceId: string) {
    this.router.navigate(['invoices', invoiceId])
  }

}
