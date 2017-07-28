import { Component, OnDestroy } from '@angular/core';
import { routes } from './app-routing.module';
import { CookieService } from 'ngx-cookie';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private cookie: CookieService, private router: Router) {
    const loggedUser: any = this.cookie.getObject('current');
    if (loggedUser) {
      this.router.navigate([loggedUser.url]);
    }
  }
}
