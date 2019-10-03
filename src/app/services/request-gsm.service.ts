import { Injectable } from '@angular/core';
import { ResponseModel } from '../models/responseModel';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RequestGsmService {

  constructor(private http: HttpClient) { }
  getAll(page: number, pageSize: number) {
    return this.http.get<ResponseModel>(environment.apiUrl + '/api/list-request-gsm/' + page + '/' + pageSize);
  }

  getCount() {
    return this.http.get<number>(environment.apiUrl + '/api/list-request-gsm/count');
  }
}
