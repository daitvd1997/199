import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./components/login/login.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { CreatePartnerComponent } from "./components/create-partner/create-partner.component";
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  // {
  //   path: "dashboard",
  //   component: DashboardComponent,
  //   canActivate: [AuthGuard],
  //   children: [
  //     // { path : 'mentor', component: MentorComponent},
  //     { path: "dashboard", component: DashboardComponent },
  //   ]
  // },
  { path: "home", redirectTo: 'dashboard/home' },
  { path: "dashboard", component: DashboardComponent },
  { path: "createPartner", component: CreatePartnerComponent },
  { path: "login", component: LoginComponent },
  { path: "dashboard", redirectTo: 'dashboard/dashboard' },
  { path: "createPartner", redirectTo: 'dashboard/createPartner' },
  // { path: "**", component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
