import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';
import { MyCookieService } from '../../services/cookie.service';

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
              private aService: AuthenticationService) { }

  onSubmit(): void {
    if (this.isFieldsEmpty()) return;
    this.aService.authenticate(this.login, this.password)
      .then(res => res.json())
      .then((obj: any) => {
        this.prepareCookie(obj);
        this.router.navigate([obj.url]);
      }, (error) => {
        const err = error.json();
        if (err) {
          console.log(err.error);
        }
      });
  }

  isFieldsEmpty(): boolean {
    if (!this.login || !this.password) {
      console.log('Empty field');
      return true;
    }
    return false;
  }

  prepareCookie(obj: any): void {
    this.cookie.removeCookie();
    obj.url = 'main-page';
    this.cookie.setCookie(obj);
    this.cookie.initBasket();
  }
}
