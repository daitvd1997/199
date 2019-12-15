import { Injectable } from '@angular/core';
import { ResponseModel } from '../models/responseModel';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class RequestGsmService {

  constructor(private http: HttpClient,private authenticationService: AuthenticationService) { }
  getAll(page: number, pageSize: number) {
    const currentUser = this.authenticationService.currentUserValue;
    if (currentUser.role != '2') {
      return this.http.get<ResponseModel>(environment.apiUrl + '/api/user/list-request-gsm/' + page + '/' + pageSize);
    } else {
      return this.http.get<ResponseModel>(environment.apiUrl + '/api/admin/list-request-gsm/' + page + '/' + pageSize);
    }
  }

  getCount() {
    const currentUser = this.authenticationService.currentUserValue;
    if (currentUser.role != '2') {
      return this.http.get<ResponseModel>(environment.apiUrl + '/api/user/list-request-gsm/count');
    } else {
      return this.http.get<ResponseModel>(environment.apiUrl + '/api/admin/list-request-gsm/count');
    }
  }
  recall(id:number) {
    return this.http.get<ResponseModel>(environment.apiUrl+'/api/user/pull-199/'+id);
  }

  search(searchKey:string) {
    const currentUser = this.authenticationService.currentUserValue;
    if (currentUser.role != '2') {
      return this.http.get<ResponseModel>(environment.apiUrl + '/api/user/search-request-gsm/' + searchKey);
    } else {
      return this.http.get<ResponseModel>(environment.apiUrl + '/api/admin/search-request-gsm/' + searchKey);
    }
  }
}
