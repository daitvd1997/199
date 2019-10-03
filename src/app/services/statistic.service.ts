import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { DashboardModel } from '../models/dashboardModel';
import { environment } from 'src/environments/environment';
import { helpers } from 'chart.js';
import { ResponseModel } from '../models/responseModel';
import { StatisticModel } from '../models/StatisticModel';

@Injectable({
  providedIn: 'root'
})
export class StatisticService {

  constructor(private http: HttpClient) { }

  getAllHistory() {
    // console.log(localStorage.getItem("currentUser"));
    return this.http.get<StatisticModel>(
      environment.apiUrl + '/api/admin/get-statist',
    );
  }


}
