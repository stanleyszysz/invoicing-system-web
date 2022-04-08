import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InvoiceListModel } from '../model/invoice.list.model';
import { commons } from '../../environments/commons';
import { InvoiceAddModel } from '../model/invoice.add.model';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  private path = 'invoice';

  constructor(private httpClient: HttpClient) { }

  public getAllInvoices(): Observable<Array<InvoiceListModel>> {
    return this.httpClient.get<Array<InvoiceListModel>>(`${commons.apiBasePath}/${this.path}`);
  }

  public save(item: InvoiceAddModel): Observable<InvoiceAddModel> {
    console.log(item)
    return this.httpClient.post<InvoiceAddModel>(`${commons.apiBasePath}/${this.path}`, item);
  }

  // public get(companyId: string): Observable<InvoiceAddModel> {
  //   return this.httpClient.get<InvoiceAddModel>(`${commons.apiBasePath}/${this.path}/${companyId}`)
  // }

  // public edit(companyId: string, item: InvoiceAddModel): Observable<InvoiceAddModel>{
  //   const resEdit = this.httpClient.patch<InvoiceAddModel>(`${commons.apiBasePath}/${this.path}/${companyId}`, item)
  //   return resEdit
  // }

  // public delete(companyId: string): Observable<void>{
  //   return this.httpClient.delete<void>(`${commons.apiBasePath}/${this.path}/${companyId}`)
  // }
}
