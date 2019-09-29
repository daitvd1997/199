import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let LoginComponent = class LoginComponent {
    constructor(authenticationService, alertService, router) {
        this.authenticationService = authenticationService;
        this.alertService = alertService;
        this.router = router;
    }
    ngOnInit() {
    }
    loginFuntion() {
        console.log(this.email + this.password);
        this.authenticationService.login(this.email, this.password).subscribe((result) => {
            console.log(result);
            console.log(result.message);
            if (!result.token || !(result.role === '2')) {
                this.alertService.danger('Sai tài khoản mật khẩu');
                this.authenticationService.logout();
            }
            else {
                this.alertService.success('Đăng nhập thành công');
                this.router.navigate(['/']);
            }
        });
    }
};
LoginComponent = tslib_1.__decorate([
    Component({
        selector: 'app-login',
        templateUrl: './login.component.html',
        styleUrls: ['./login.component.css']
    })
], LoginComponent);
export { LoginComponent };
//# sourceMappingURL=login.component.js.map