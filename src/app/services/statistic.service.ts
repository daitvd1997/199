import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ResponseModel } from '../models/responseModel';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class StatisticService {

  constructor(private http: HttpClient,private authenticationService: AuthenticationService) { }

  getAllHistory() {
    const currentUser = this.authenticationService.currentUserValue;
    if (currentUser.role == '2') {
      return this.http.get<ResponseModel[]>(environment.apiUrl + '/api/admin/get-statist');
    } else {
      return this.http.get<ResponseModel[]>(environment.apiUrl + '/api/user/get-statist');
    }
  }
}
