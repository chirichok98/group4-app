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
  type: any;

  skip: number;
  amount: number;
  hasMore: boolean = true;

  constructor(private nService: NotificationService,
              private cookie: MyCookieService) {
    this.initPag(0, 10);
    this.getByType(2);
  }

  markAsRead(): void {
    const ids: number[] = this.cookie.getCheckedNotifications();
    this.nService.updateNotificationsStatuses(ids)
      .then((res: any) => {
        console.log(res);
        this.cookie.initCheckedNotifications();
      }, (err: any) => console.log(err));
  }

  getByType(id: number): void {
    this.notifications = [];
    this.initPag(0, 10);
    this.type = this.getFunctionByType(id);
    this.type();
  }

  initPag(skip: number, amount: number): void {
    this.skip = skip || 0;
    this.amount = amount || 10;
  }

  nextPage(): void {
    this.skip += this.amount;
    this.type();
  }

  getAll(): void {
    this.nService.getAllNotifications(this.skip, this.amount)
      .then((res: any) => {
        if (res.length < this.amount) this.hasMore = false;
        this.notifications = this.notifications.concat(res);
        this.isSpinnerVisible = false;
      });
  }

  getInterviews(skip: number, amount: number): void {
    this.nService.getInterviewNotifications(this.skip, this.amount)
      .then((res: any) => {
        if (res.length < this.amount) this.hasMore = false;
        this.notifications = this.notifications.concat(res);
        this.isSpinnerVisible = false;
      });
  }

  getUnseen(skip: number, amount: number): void {
    this.nService.getUnseenNotifications(this.skip, this.amount)
      .then((res: any) => {
        if (res.length < this.amount) this.hasMore = false;
        this.notifications = this.notifications.concat(res);
        this.isSpinnerVisible = false;
      });
  }


  getFunctionByType(id: number): any {
    switch (id) {
      case 1: return this.getAll;
      case 2: return this.getUnseen;
      case 3: return this.getInterviews;
    }
  }
}
