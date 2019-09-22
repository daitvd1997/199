import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { AlertService } from 'ngx-alerts';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  email: string;
  password: string;
  constructor(private authenticationService: AuthenticationService,
              private alertService: AlertService,
              private router: Router) {
  }

  ngOnInit() {
  }

  loginFuntion() {
    console.log(this.email + this.password);
    this.authenticationService.login(this.email, this.password).subscribe((result: any) => {
      console.log(result);
      console.log(result.message);
      if (!result.token || !(result.role === '2') ) {
        this.alertService.danger('Sai tài khoản mật khẩu');
        this.authenticationService.logout();
      } else {
        this.alertService.success('Đăng nhập thành công');
        this.router.navigate(['/home']);
      }
    });

  }

}
