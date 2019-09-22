import { ResponseModel } from "./../models/responseModel";
import { HttpClient } from "@angular/common/http";
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
    return this.http.post<any>(
      environment.apiUrl + "/api/admin/create-partner",
      createPartnerModel
    );
  }
}
