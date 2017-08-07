import { Component, OnDestroy } from '@angular/core';
import { routes } from './app-routing.module';
import { Router, ActivatedRoute } from '@angular/router';
import { MyCookieService } from './services/cookie.service';
import { LocationStrategy } from '@angular/common';
import { SnackbarService } from './services/snackbar.service';
import { SignalRService } from './services/signalR.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {


  constructor(private cookie: MyCookieService,
              private sR: SignalRService,
              private router: Router,
              private location: LocationStrategy) {
    const loggedUser: any = this.cookie.getCookie();
    if (loggedUser) {
      const url: string = this.location.path();
      this.sR.initSignalR();
      if (url) {
        this.cookie.updateUrl(url);
        this.router.navigate([url]);
        return;
      }
      this.router.navigate([loggedUser.url]);
    } else {
      this.router.navigate(['home']);
    }

  }
}
