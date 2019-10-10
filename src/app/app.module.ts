import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { JwtInterceptor } from './auth/jwt.interceptor';
import { ErrorInterceptor } from './auth/error.interceptor';
import { MaterialModule } from './material/material.module';
import { FormsModule } from '@angular/forms';
import { AlertModule } from 'ngx-alerts';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { StatisticComponent } from './components/statistic/statistic.component';
import { ConfigPartnerComponent } from './components/partner/config-partner/config-partner.component';
import { ListPartnerComponent } from './components/partner/list-partner/list-partner.component';
import { CreatePartnerComponent } from './components/partner/create-partner/create-partner.component';
import { EditPartnerComponent } from './components/partner/edit-partner/edit-partner.component';
import { HeaderComponent } from './fixlayout/header/header.component';
import { FooterComponent } from './fixlayout/footer/footer.component';
// import {ChartModule} from 'primeng/chart';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    CreatePartnerComponent,
    StatisticComponent,
    ConfigPartnerComponent,
    ListPartnerComponent,
    EditPartnerComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    FormsModule,
    ChartsModule,
    // ChartModule,
    AlertModule.forRoot({maxMessages: 5, timeout: 5000, position: 'right'})
  
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
