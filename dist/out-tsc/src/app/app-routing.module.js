import * as tslib_1 from "tslib";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { LoginComponent } from "./components/login/login.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { CreatePartnerComponent } from "./components/create-partner/create-partner.component";
import { StatisticComponent } from './components/statistic/statistic.component';
import { ConfigPartnerComponent } from './components/config-partner/config-partner.component';
const routes = [
    // {
    //   path: "dashboard",
    //   canActivate: [AuthGuard],
    //   children: [      
    //     { path: "createPartner", component: CreatePartnerComponent },
    //     { path: '', component: DashboardComponent },
    //   ]
    // },
    { path: "", redirectTo: 'dashboard', pathMatch: 'full' },
    // { path: "dashboard", redirectTo: 'dashboard', pathMatch: 'full' },
    { path: "login", component: LoginComponent },
    { path: "configPartner", component: ConfigPartnerComponent },
    { path: "statistic", component: StatisticComponent },
    { path: "dashboard", component: DashboardComponent },
    { path: "createPartner", component: CreatePartnerComponent },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map