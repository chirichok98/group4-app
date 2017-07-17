import { Component, OnInit } from '@angular/core';

import { INotificationOption } from '../../../interfaces/INotificationOption';
import { NotificationType } from '../../../components/notification/notification.component';

@Component({
  selector: 'notifications',
  templateUrl: 'notifications.component.html',
  styleUrls: ['notifications.component.scss'],
})

export class NotificationsComponent implements OnInit {
  notifications: INotificationOption[] = [
    {
      type: NotificationType[NotificationType.Reminders],
      date: new Date(2017, 7, 16),
      description: 'You have the Interview with Artem Krotov',
    },
    {
      type: NotificationType[NotificationType.News],
      date: new Date(2017, 6, 14),
      description: 'You created the new candidate card for Artem Krotov',
    },
    {
      type: NotificationType[NotificationType.Assignments],
      date: new Date(2017, 7, 10),
      description: 'Natasha assigned the Vladislav Popov candidate to you',
    },
    {
      type: NotificationType[NotificationType.Assignments],
      date: new Date(2017, 7, 10),
      description: 'Natasha assigned the Vladislav Popov candidate to you',
    },
  ];
  constructor() { }

  ngOnInit() { }
}
