import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { environment } from "src/environments/environment";
let DashboardserviceService = class DashboardserviceService {
    constructor(http) {
        this.http = http;
        this.url = "";
        this.httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                Authorization: 'eyJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1Njk3NzgxODYsInVzZXJuYW1lIjoiYWRtaW4ifQ.kvFLldb5KvuHuOf1WK7bJFwPEKfwIBTYHZM18mkVFzw'
            })
        };
    }
    getAllHistory() {
        // console.log(localStorage.getItem("currentUser"));
        return this.http.get(environment.apiUrl + '/api/admin/getCompact', this.httpOptions);
    }
    searchHistory(search) {
        return this.http.post(environment.apiUrl + '/api/admin/getCompact/' + search, search, this.httpOptions);
    }
};
DashboardserviceService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], DashboardserviceService);
export { DashboardserviceService };
//# sourceMappingURL=dashboardservice.service.js.map