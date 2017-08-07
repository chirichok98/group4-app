import { Injectable } from '@angular/core';
import { MyCookieService } from './cookie.service';
import { SnackbarService } from './snackbar.service';

declare const $;

@Injectable()
export class SignalRService {
  constructor(private cookie: MyCookieService,
              public snackService: SnackbarService) { }

  initSignalR(context, stop: boolean): void {
    if (stop) {
      console.log('stop signalR');
      $.connection.hub.stop();
      return;
    }
    console.log(`init signalR ${this.cookie.getToken()}`);
    const notifications = $.connection.notifications;

    $.connection.hub.url = 'http://knowbase.azurewebsites.net/signalr/hubs';

    $.connection.hub.qs = { bearer: context.cookie.getToken() };

    $.connection.hub.disconnected(() => {
      setTimeout(() => {
        $.connection.hub.start();
      }, 5000);
    });

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
