import { Component, OnInit } from '@angular/core';

import { INotificationOption } from '../../../interfaces/INotificationOption';
import { NotificationService } from '../../../services/notifications.service';
import { MyCookieService } from '../../../services/cookie.service';

declare const $;

@Component({
  selector: 'notifications',
  templateUrl: 'notifications.component.html',
  styleUrls: ['notifications.component.scss'],
})

export class NotificationsComponent {
  notifications: INotificationOption[] = [];

  constructor(private nService: NotificationService,
              private cookie: MyCookieService) {
    this.nService.getNotifications({ skip: 0, amount: 100 })
      .then((notif: any) => {
        this.notifications = notif;
      });
  }

  markAsRead(): void {
    const notif: number[] = this.cookie.getCheckedNotifications();
  }
}
