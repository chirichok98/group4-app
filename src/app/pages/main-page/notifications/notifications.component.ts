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
  isSpinnerVisible: boolean = true;

  constructor(private nService: NotificationService,
              private cookie: MyCookieService) {
    this.nService.getUnseenNotifications({ skip: 0, amount: 100 })
      .then((notif: any) => {
        this.notifications = notif;
        console.log(this.notifications);
        this.isSpinnerVisible = false;
      }, (err: any) => {
        console.log(err);
        this.isSpinnerVisible = false;
      });
  }

  markAsRead(): void {
    const ids: number[] = this.cookie.getCheckedNotifications();
    this.nService.updateNotificationsStatuses(ids)
      .then((res: any) => {
        console.log(res);
        this.cookie.initCheckedNotifications();
      }, (err: any) => console.log(err));
  }
}
