import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { DashboardModel } from '../models/dashboardModel';
import { environment } from "src/environments/environment";
import { helpers } from 'chart.js';
import { ResponseModel } from '../models/responseModel';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class DashboardserviceService {

  constructor(private http: HttpClient, private authenticationService: AuthenticationService) { }

  getAllRequestGsm(page: number, pageSize: number) {
    // console.log(localStorage.getItem("currentUser"));
    const currentUser = this.authenticationService.currentUserValue;
    if (currentUser.role == '2') {
      return this.http.get<ResponseModel[]>(environment.apiUrl + '/api/admin/list-request-gsm/' + page + '/' + pageSize);
    } else {
      return this.http.get<ResponseModel[]>(environment.apiUrl + '/api/user/list-request-gsm/' + page + '/' + pageSize);
    }
  }

  getCount() {
    const currentUser = this.authenticationService.currentUserValue;
    if (currentUser.role == '2') {
      return this.http.get<ResponseModel[]>(environment.apiUrl + '/api/admin/list-request-gsm/count');
    } else {
      return this.http.get<ResponseModel[]>(environment.apiUrl + '/api/admin/list-request-gsm/count');
    }
  }
}
