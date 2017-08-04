import { Component, OnDestroy } from '@angular/core';
import { routes } from './app-routing.module';
import { Router, ActivatedRoute } from '@angular/router';
import { MyCookieService } from './services/cookie.service';
import { LocationStrategy } from '@angular/common';
import { SnackbarService } from './services/snackbar.service';

declare const $;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  signalR: any = (() => {


  })();

  constructor(private cookie: MyCookieService,
              private router: Router,
              private location: LocationStrategy,
              public snackService: SnackbarService) {
    const loggedUser: any = this.cookie.getCookie();
    if (loggedUser) {
      const url: string = this.location.path();
      if (url) {
        this.cookie.updateUrl(url);
        this.router.navigate([url]);
        return;
      }
      (() => {
        const notifications = $.connection.notifications;

        notifications.client.getNotifications = function (newNotifications) {
          console.log(`Message: ${newNotifications}`);
        };

        const test: any = (() => { console.log('new app'); })();

        $.connection.hub.url = 'http://knowbase.azurewebsites.net';

        $.connection.hub.qs = { bearer: this.cookie.getToken() };

        $.connection.hub.start().done(() => { console.log('here'); });
      })();
      this.router.navigate([loggedUser.url]);
    } else {
      this.router.navigate(['home']);
    }

  }
}
