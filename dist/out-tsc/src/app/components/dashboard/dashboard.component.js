import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let DashboardComponent = class DashboardComponent {
    constructor(dashboardservice) {
        this.dashboardservice = dashboardservice;
    }
    ngOnInit() {
        this.getAllHistory();
        this.search = '';
    }
    getAllHistory() {
        // tslint:disable-next-line: no-shadowed-variable
        this.dashboardservice.getAllHistory().subscribe((res) => {
            this.listResponseHistory = res.listModel;
            console.log(res.listModel);
        });
    }
    searchHistory() {
        this.dashboardservice.searchHistory(this.search).subscribe(data => this.listResponseHistory = data);
    }
};
DashboardComponent = tslib_1.__decorate([
    Component({
        selector: 'app-dashboard',
        templateUrl: './dashboard.component.html',
        styleUrls: ['./dashboard.component.css']
    })
], DashboardComponent);
export { DashboardComponent };
//# sourceMappingURL=dashboard.component.js.map