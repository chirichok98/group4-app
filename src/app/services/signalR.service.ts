import { Injectable } from '@angular/core';
import { MyCookieService } from './cookie.service';
import { SnackbarService } from './snackbar.service';

declare const $;

@Injectable()
export class SignalRService {
  constructor(private cookie: MyCookieService,
              public snackService: SnackbarService) { }

  initSignalR(context): void {
    const notifications = $.connection.notifications;

    $.connection.hub.url = 'http://knowbase.azurewebsites.net/signalr/hubs';

    $.connection.hub.qs = { bearer: context.cookie.getToken() };

    notifications.client.getNotification = function (notification) {
      console.log('Notification: ' + notification);
      context.snackService.showSnack(notification);
    };

    notifications.client.getUnreadAmount = function (amount) {
      console.log('Amount changed ' + amount);
      context.setAmount(amount);
    };

    $.connection.hub.start().done(() => notifications.server.sendUnreadAmount());
  }

  setAmount(amount: number): void {
    this.cookie.setUnreadAmount(amount);
  }
}
