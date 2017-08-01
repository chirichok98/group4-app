import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';
import { MyCookieService } from '../../services/cookie.service';
import { MdSnackBar } from '@angular/material';
import { SnackbarService } from '../../services/snackbar.service';

@Component({
  selector: 'login-form',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginFormComponent {
  login: string;
  password: string;

  constructor(private router: Router,
              private cookie: MyCookieService,
              private aService: AuthenticationService,
              private snackService: SnackbarService) { }

  onSubmit(): void {
    if (!this.isChecked()) return;
    this.aService.authenticate(this.login, this.password)
      .then(res => res.json())
      .then((obj: any) => {
        this.prepareCookie(obj);
        this.router.navigate([obj.url]);
        this.snackService.showSnack('Succesfully logged in!', 'SUCCESS');
      }, (error) => {
        const err = error.json();
        if (err) {
          this.snackService.showSnack(err.error, 'ERROR');
        }
      });
  }

  isChecked(): boolean {
    if (!this.login || !this.password) {
      this.snackService.showSnack('Empty fields', 'RETRY');
      return false;
    }
    return true;
  }

  prepareCookie(obj: any): void {
    this.cookie.removeCookie();
    obj.url = 'main-page';
    this.cookie.setCookie(obj);
    this.cookie.initBasket();
  }
}
