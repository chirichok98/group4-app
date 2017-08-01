import { Component, OnDestroy } from '@angular/core';
import { routes } from './app-routing.module';
import { Router } from '@angular/router';
import { MyCookieService } from './services/cookie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private cookie: MyCookieService, private router: Router) {
    const loggedUser: any = this.cookie.getCookie();
    if (loggedUser) {
      this.router.navigate([loggedUser.url]);
    } else {
      this.router.navigate(['home']);
    }
  }
}
