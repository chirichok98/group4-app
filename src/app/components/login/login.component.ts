import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie';
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
        this.cookie.putObject('current', obj);

        this.router.navigate([`main-page`]);
      }, (error) => {
        const err = error.json();
        if (err) {
          console.log(err.error);
        }
      });
  }
}
