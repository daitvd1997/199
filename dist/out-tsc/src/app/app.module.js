import * as tslib_1 from "tslib";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { JwtInterceptor } from './auth/jwt.interceptor';
import { ErrorInterceptor } from './auth/error.interceptor';
import { MaterialModule } from './material/material.module';
import { FormsModule } from '@angular/forms';
import { ZoomModule } from 'angular-zoom';
import { AlertModule } from 'ngx-alerts';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CreatePartnerComponent } from './components/create-partner/create-partner.component';
import { StatisticComponent } from './components/statistic/statistic.component';
import { ConfigPartnerComponent } from './components/config-partner/config-partner.component';
// import {ChartModule} from 'primeng/chart';
let AppModule = class AppModule {
};
AppModule = tslib_1.__decorate([
    NgModule({
        declarations: [
            AppComponent,
            LoginComponent,
            DashboardComponent,
            CreatePartnerComponent,
            StatisticComponent,
            ConfigPartnerComponent,
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
            ZoomModule,
            // ChartModule,
            AlertModule.forRoot({ maxMessages: 5, timeout: 5000, position: 'right' })
        ],
        providers: [
            { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
            { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
        ],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map