import { ResponseModel } from "../models/responseModel";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { CreateNewPortModel } from '../models/createNewPortModel';
import { PortModel } from '../models/portModel';

@Injectable({
    providedIn: "root"
})
export class CreateNewPortService {
    constructor(private http: HttpClient) { }
    createNewPort(createNewPortModel: CreateNewPortModel) {
        return this.http.post<ResponseModel>(
            environment.apiUrl + "/api/admin/create-ussd/192.168.1.1/80/32",
            createNewPortModel
        );
    }

    getAllPort(portModel: PortModel) {
        return this.http.get<ResponseModel>(
            environment.apiUrl + '',
        )
    }
}
