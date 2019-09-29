import * as tslib_1 from "tslib";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
let CreatePartnerService = class CreatePartnerService {
    constructor(http) {
        this.http = http;
    }
    getToken() {
        console.log(localStorage.getItem("currentUser"));
        return this.http.get(environment.apiUrl + "/api/admin/get-token-partner/");
    }
    createPartner(createPartnerModel) {
        return this.http.post(environment.apiUrl + "/api/admin/create-partner", createPartnerModel);
    }
};
CreatePartnerService = tslib_1.__decorate([
    Injectable({
        providedIn: "root"
    })
], CreatePartnerService);
export { CreatePartnerService };
//# sourceMappingURL=createPartner.service.js.map