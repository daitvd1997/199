import { PartnerModel } from './../models/partnerModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class PartnerService {

  constructor(private http : HttpClient) { }
  getAll(page: number, pageSize: number) {
    return this.http.get<ResponseModel>(environment.apiUrl + '/api/admin/partners/' + page + '/' + pageSize);
  }

  getCount() {
    return this.http.get<number>(environment.apiUrl + '/api/admin/partners/count');
  }

  getPartnerOption() {
    return this.http.get<ResponseModel>(environment.apiUrl + '/api/admin/partnerModel');
  }
}
