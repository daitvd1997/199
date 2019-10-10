import { EditPartnerComponent } from "./components/partner/edit-partner/edit-partner.component";
import { ListPartnerComponent } from "./components/partner/list-partner/list-partner.component";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./components/login/login.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { AuthGuard } from "./auth/auth.guard";
import { StatisticComponent } from "./components/statistic/statistic.component";
import { ConfigPartnerComponent } from "./components/partner/config-partner/config-partner.component";
import { CreatePartnerComponent } from "./components/partner/create-partner/create-partner.component";

const routes: Routes = [
  {
    path: "dashboard",
    canActivate: [AuthGuard],
    children: [
      { path: "createPartner", component: CreatePartnerComponent },
      { path: "", component: DashboardComponent },
      { path: "edit-partner/:id", component: EditPartnerComponent },
      { path: "partners", component: ListPartnerComponent },
      { path: "configPartner", component: ConfigPartnerComponent },
      { path: "listPartner", component: ListPartnerComponent },
      { path: "statistic", component: StatisticComponent }
    ]
  },
  { path: "", redirectTo: "dashboard", pathMatch: "full" },
  // { path: "", redirectTo: 'login', pathMatch: 'full' },
  { path: "login", component: LoginComponent },
  { path: "home", redirectTo: "dashboard/home" },
  // { path: "dashboard", component: DashboardComponent },
  {
    path: "createPartner",
    redirectTo: "dashboard/createPartner",
    pathMatch: "full"
  },
  // { path: "login", component: LoginComponent },
  { path: "dashboard", redirectTo: "dashboard/dashboard" },
  { path: "configPartner", redirectTo: "dashboard/configPartner" },
  { path: "listPartner", redirectTo: "dashboard/listPartner" },
  { path: "statistic", redirectTo: "dashboard/statistic" },
  { path: "partners", redirectTo: "dashboard/partners" },
  { path: "edit-partner/:id", redirectTo: "dashboard/edit-partner/:id" },
  // { path: "createPartner", redirectTo: 'dashboard/createPartner' },
  { path: "**", redirectTo: "" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
