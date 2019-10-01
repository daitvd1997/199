import * as tslib_1 from "tslib";
import { Component } from "@angular/core";
import { CreateNewPortModel } from 'src/app/models/createNewPortModel';
let ConfigPartnerComponent = class ConfigPartnerComponent {
    constructor(createPartnerService, alertService) {
        this.createPartnerService = createPartnerService;
        this.alertService = alertService;
        this.createNewPortModel = new CreateNewPortModel();
    }
    ngOnInit() {
    }
    createNewPortFuntion() {
        this.createPartnerService
            .createNewPort(this.createNewPortModel)
            .subscribe(result => {
            console.log(result);
            console.log(result.message);
            this.alertService.success(result.message);
            this.createNewPortModel = new CreateNewPortModel();
        });
    }
};
ConfigPartnerComponent = tslib_1.__decorate([
    Component({
        selector: 'app-config-partner',
        templateUrl: './config-partner.component.html',
        styleUrls: ['./config-partner.component.css']
    })
], ConfigPartnerComponent);
export { ConfigPartnerComponent };
//# sourceMappingURL=config-partner.component.js.map