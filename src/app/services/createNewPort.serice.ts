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


    httpOptions = {
        headers: new HttpHeaders(
            {
                'Content-Type': 'application/json',
                // tslint:disable-next-line: max-line-length
                Authorization: 'eyJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1Njk3NzgxODYsInVzZXJuYW1lIjoiYWRtaW4ifQ.kvFLldb5KvuHuOf1WK7bJFwPEKfwIBTYHZM18mkVFzw'
            }
        )
    };

    createNewPort(createNewPortModel: CreateNewPortModel) {
        return this.http.post<ResponseModel>(
            environment.apiUrl + "/api/admin/create-ussd/192.168.1.1/80/32",
            createNewPortModel
        );
    }

    getAllPort(portModel: PortModel) {
        return this.http.get<ResponseModel>(
            environment.apiUrl + '',
            this.httpOptions
        )
    }
}
