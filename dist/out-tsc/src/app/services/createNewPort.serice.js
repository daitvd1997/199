import * as tslib_1 from "tslib";
import { HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
let CreateNewPortService = class CreateNewPortService {
    constructor(http) {
        this.http = http;
        this.httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                // tslint:disable-next-line: max-line-length
                Authorization: 'eyJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1Njk3NzgxODYsInVzZXJuYW1lIjoiYWRtaW4ifQ.kvFLldb5KvuHuOf1WK7bJFwPEKfwIBTYHZM18mkVFzw'
            })
        };
    }
    createNewPort(createNewPortModel) {
        return this.http.post(environment.apiUrl + "/api/admin/create-ussd/192.168.1.1/80/32", createNewPortModel);
    }
    getAllPort(portModel) {
        return this.http.get(environment.apiUrl + '', this.httpOptions);
    }
};
CreateNewPortService = tslib_1.__decorate([
    Injectable({
        providedIn: "root"
    })
], CreateNewPortService);
export { CreateNewPortService };
//# sourceMappingURL=createNewPort.serice.js.map