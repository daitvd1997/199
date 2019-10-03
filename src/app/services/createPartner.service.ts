import { ResponseModel } from "./../models/responseModel";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { CreatePartnerModel } from "../models/createPartnerModel";

@Injectable({
  providedIn: "root"
})
export class CreatePartnerService {
  constructor(private http: HttpClient) {}

  getToken() {
    console.log(localStorage.getItem("currentUser"));
    return this.http.get<ResponseModel>(
      environment.apiUrl + "/api/admin/get-token-partner/"
    );
  }

  createPartner(createPartnerModel: CreatePartnerModel) {
    return this.http.post<ResponseModel>(
      environment.apiUrl + "/api/admin/create-partner",
      createPartnerModel
    );
  }

  getPartnerById(id:number) {
    return this.http.get<ResponseModel>(environment.apiUrl+"/api/admin/partner/"+id);
  }

  updatePartner(createPartnerModel: CreatePartnerModel) {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    const partner = JSON.stringify(createPartnerModel);
    return this.http.put<ResponseModel>(environment.apiUrl+'/api/admin/partner/edit',partner,httpOptions);
  }
}
