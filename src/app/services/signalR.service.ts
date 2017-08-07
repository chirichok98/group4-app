import { Injectable } from '@angular/core';
import { MyCookieService } from './cookie.service';
import { SnackbarService } from './snackbar.service';

declare const $;

@Injectable()
export class SignalRService {
  amount: number = 0;

  constructor(private cookie: MyCookieService,
              public snackService: SnackbarService) { }

  initSignalR() {
    const notifications = $.connection.notifications;

    (() => { console.log('new app'); })();

    $.connection.hub.url = 'http://knowbase.azurewebsites.net/signalr/hubs';

    $.connection.hub.qs = { bearer: this.cookie.getToken() };

    notifications.client.getNotification = function (notification: string): void {
      console.log('Notification: ' + notification);
      this.snackService.showSnack(notification);
    };

    notifications.client.getUnreadAmount = function (amount: number): void {
      console.log('Amount changed');
      this.amount = amount;
    };

    $.connection.hub.start().done(() => { console.log('Start SignalR'); });
  }
}
