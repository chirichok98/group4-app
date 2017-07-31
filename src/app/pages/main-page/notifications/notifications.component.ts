import { Component, OnInit } from '@angular/core';

import { INotificationOption } from '../../../interfaces/INotificationOption';
import { NotificationType } from '../../../components/notification/notification.component';
declare const $;
@Component({
  selector: 'notifications',
  templateUrl: 'notifications.component.html',
  styleUrls: ['notifications.component.scss'],
})

export class NotificationsComponent {
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
    {
      type: NotificationType[NotificationType.News],
      date: new Date(2017, 6, 14),
      description: 'You created the new candidate card for Artem Krotov',
    },
  ];
  constructor() { }

  visibilityArray: boolean[] = [true, true, true];
  colorsArray: string[] = ['dark-blue', 'light-blue', 'light-gray'];
  // Logic: We get list of classes of element that we clicked on. Then we check 
  // if one of needed classes is included in this classlist. If we found it, 
  // then we reverse boolean value of this item in visibility array.
  checkVisibility() {
    const classlist = event.srcElement.classList;
    this.colorsArray.forEach((item, index) => {
      console.log(classlist);
      if (classlist.contains(item)) {
        this.changeVisibility(item, index);
      }
    });
  }
  private changeVisibility(item, index): void {
    this.visibilityArray[index] = !this.visibilityArray[index];
    this.showChanges(item, this.visibilityArray[index]);
  }
  private showChanges(item, state): void {
    if (state) {
      $(this.defineNotificationItem(item)).css({ display: 'flex' });
      $('.' + item).style.opacity('0.5');
    } else {
      $(this.defineNotificationItem(item)).css({ display: 'none' });
    }
  }
  private defineNotificationItem (item) {
    switch (item) {
      case this.colorsArray[0]: return '.Reminders';
      case this.colorsArray[1]: return '.News';
      case this.colorsArray[2]: return '.Assignments';
      default: return '';
    }
  }
}

