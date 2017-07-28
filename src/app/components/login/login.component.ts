import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService, CookieOptions } from 'ngx-cookie';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'login-form',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginFormComponent {
  login: string;
  password: string;

  constructor(private router: Router,
              private cookie: CookieService,
              private aService: AuthenticationService) { }

  onSubmit(): void {
    if (!this.login || !this.password) {
      console.log('Empty fields');
      return;
    }
    this.aService.authenticate(this.login, this.password)
      .then(res => res.json())
      .then((obj: any) => {
        this.cookie.removeAll();
        obj.url = 'main-page';
        const expires: Date = new Date();
        expires.setSeconds(expires.getSeconds() + obj.expires_in);
        const cookieOption: CookieOptions = { expires };
        this.cookie.putObject('current', obj, cookieOption);
        this.router.navigate([obj.url]);
      }, (error) => {
        const err = error.json();
        if (err) {
          console.log(err.error);
        }
      });
  }
}
