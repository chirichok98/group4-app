import { Injectable } from '@angular/core';
import { MyCookieService } from './cookie.service';
import { SnackbarService } from './snackbar.service';

declare const $;

@Injectable()
export class SignalRService {
  amount: number = 0;

  constructor(private cookie: MyCookieService,
              public snackService: SnackbarService) { }

  initSignalR(): void {
    const notifications = $.connection.notifications;

    (() => { console.log('new app'); })();

    $.connection.hub.url = 'http://knowbase.azurewebsites.net/signalr/hubs';

    $.connection.hub.qs = { bearer: this.cookie.getToken() };

    notifications.client.getNotification = function (notification) {
      console.log('Notification: ' + notification);
      // this.snackService.showSnack(notification);
    };

    notifications.client.getUnreadAmount = function (amount) {
      console.log('Amount changed' + amount);
      this.amount = amount;
    };

    $.connection.hub.start().done(() => { 
      console.log('done');
      notifications.server.sendUnreadAmount(); 
    });
  }
}
