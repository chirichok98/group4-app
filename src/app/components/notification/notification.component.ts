import { Component, OnInit, Input } from '@angular/core';

import { INotificationOption } from '../../interfaces/INotificationOption';

export enum NotificationType {
  Reminders,
  News,
  Assignments,
}

@Component({
  selector: 'notification',
  templateUrl: 'notification.component.html',
  styleUrls: ['notification.component.scss'],
})

export class NotificationComponent implements OnInit {
  @Input() notification: INotificationOption;
  currentNotification: INotificationOption;
  constructor() { }

  ngOnInit() {
    this.currentNotification = this.notification;
  }
}
