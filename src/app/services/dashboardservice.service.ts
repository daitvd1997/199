import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { DashboardModel } from '../models/dashboardModel';
import { environment } from "src/environments/environment";
import { helpers } from 'chart.js';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class DashboardserviceService {
  url = "";

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders(
      {
        'Content-Type': 'application/json',
        Authorization: 'eyJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1Njk3NzgxODYsInVzZXJuYW1lIjoiYWRtaW4ifQ.kvFLldb5KvuHuOf1WK7bJFwPEKfwIBTYHZM18mkVFzw'
      }
    )
  };

  getAllHistory() {
    // console.log(localStorage.getItem("currentUser"));
    return this.http.get<ResponseModel[]>(
      environment.apiUrl + '/api/admin/getCompact',
      this.httpOptions
    );
  }

  searchHistory(search: string){
    return this.http.post<DashboardModel[]>(
      environment.apiUrl + '/api/admin/getCompact/' + search,
      search,
      this.httpOptions
    );
  }





}
