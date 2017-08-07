import { Component, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LocationStrategy } from '@angular/common';

import { routes } from './app-routing.module';
import { MyCookieService } from './services/cookie.service';
import { SnackbarService } from './services/snackbar.service';
import { SignalRService } from './services/signalR.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  isHomePage: boolean = true;

  constructor(private cookie: MyCookieService,
              private sR: SignalRService,
              private router: Router,
              private location: LocationStrategy) {
    const loggedUser: any = this.cookie.getCookie();
    if (loggedUser) {
      const url: string = this.location.path();
      this.sR.initSignalR(this.sR);
      this.cookie.initCheckedNotifications();
      this.cookie.initBasket();
      if (url) {
        this.cookie.updateUrl(url);
        this.router.navigate([url]);
        return;
      }
      this.router.navigate([loggedUser.url]);
    } else {
      this.router.navigate(['home']);
      this.isHomePage = true;
    }
  }

  ngDoCheck() {
    const url: string = this.location.path();
    console.log(url);
    if (url === '/home') {
      this.isHomePage = true;
      return;
    }
    this.isHomePage = false;
  }
}
