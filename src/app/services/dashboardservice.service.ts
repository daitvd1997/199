import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { DashboardModel } from '../models/dashboardModel';
import { environment } from "src/environments/environment";

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
        'Authorization': 'eyJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1Njg5NzM2MTYsInVzZXJuYW1lIjoiTm1hbSJ9.XaQVoQvd_Mh932XPvtywXapRJhGQYTQ_ERsJcwxhQZQ'
      }
    )
  };


  getAllHistory() {
    // console.log(localStorage.getItem("currentUser"));
    return this.http.get<DashboardModel[]>(
      environment.apiUrl + "/api/v1/employees"
    );
  }





}
