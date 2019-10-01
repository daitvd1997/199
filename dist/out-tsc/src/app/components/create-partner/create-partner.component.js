import * as tslib_1 from "tslib";
import { Component } from "@angular/core";
import { CreatePartnerModel } from "src/app/models/createPartnerModel";
let CreatePartnerComponent = class CreatePartnerComponent {
    constructor(createPartnerService, alertService) {
        this.createPartnerService = createPartnerService;
        this.alertService = alertService;
        this.createPartnerModel = new CreatePartnerModel();
    }
    ngOnInit() {
        this.getToken();
    }
    getToken() {
        this.createPartnerService.getToken().subscribe(ussr => {
            this.responseToken = ussr;
            console.log(ussr.data);
        });
    }
    createPartnerFuntion() {
        console.log(this.createPartnerModel.token = this.responseToken.data);
        this.createPartnerService
            .createPartner(this.createPartnerModel)
            .subscribe(result => {
            console.log(result);
            console.log(result.message);
            this.alertService.success(result.message);
            this.createPartnerModel = new CreatePartnerModel();
        });
    }
};
CreatePartnerComponent = tslib_1.__decorate([
    Component({
        selector: "app-create-partner",
        templateUrl: "./create-partner.component.html",
        styleUrls: ["./create-partner.component.css"]
    })
], CreatePartnerComponent);
export { CreatePartnerComponent };
//# sourceMappingURL=create-partner.component.js.map