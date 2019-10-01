import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./components/login/login.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { CreatePartnerComponent } from "./components/create-partner/create-partner.component";
import { AuthGuard } from './auth/auth.guard';
import { StatisticComponent } from './components/statistic/statistic.component';
import { ConfigPartnerComponent } from './components/config-partner/config-partner.component';

const routes: Routes = [
  {
    path: "dashboard",
    canActivate: [AuthGuard],
    children: [      
      { path: "createPartner", component: CreatePartnerComponent },
      { path: '', component: DashboardComponent },
    ]
  },
  { path: "", redirectTo: 'dashboard', pathMatch: 'full' },
  // { path: "", redirectTo: 'login', pathMatch: 'full' },
  { path: "dashboard", redirectTo: 'dashboard', pathMatch: 'full' },
  { path: "login", component: LoginComponent },
  { path: "home", redirectTo: 'dashboard/home' },
  // { path: "dashboard", component: DashboardComponent },
  { path: "createPartner", redirectTo: 'dashboard/createPartner', pathMatch: 'full' },
  // { path: "login", component: LoginComponent },
  { path: "dashboard", redirectTo: 'dashboard/dashboard' },

  // { path: "createPartner", redirectTo: 'dashboard/createPartner' },
  { path: "**", redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
