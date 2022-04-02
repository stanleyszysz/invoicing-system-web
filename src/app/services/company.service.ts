import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CompanyListModel } from '../model/company.list.model';
import { commons } from '../../environments/commons';
import { CompanyAddModel } from '../model/company.add.model';
@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  private path = 'company';

  constructor(private httpClient: HttpClient) { }

  public fetchData(): Observable<Array<CompanyListModel>> {
    return this.httpClient.get<Array<CompanyListModel>>(`${commons.apiBasePath}/${this.path}`);
  }

  public save(item: CompanyAddModel): Observable<CompanyAddModel> {
    return this.httpClient.post<CompanyAddModel>(`${commons.apiBasePath}/${this.path}`, item);
  }

  public get(companyId: string): Observable<CompanyAddModel> {
    return this.httpClient.get<CompanyAddModel>(`${commons.apiBasePath}/${this.path}/${companyId}`)
  }

}
