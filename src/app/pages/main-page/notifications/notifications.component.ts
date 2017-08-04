import { Component, OnInit } from '@angular/core';

import { INotificationOption } from '../../../interfaces/INotificationOption';
import { NotificationService } from '../../../services/notifications.service';

declare const $;

@Component({
  selector: 'notifications',
  templateUrl: 'notifications.component.html',
  styleUrls: ['notifications.component.scss'],
})

export class NotificationsComponent {
  notifications: INotificationOption[] = [];

  constructor(private nService: NotificationService) {
    this.nService.getNotifications({ skip: 0, amount: 100 })
      .then((notif: any) => {
        console.log(notif);
        this.notifications = notif;
      });
  }
}
