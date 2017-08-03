import { Component, OnInit, Input } from '@angular/core';

import { INotificationOption } from '../../interfaces/INotificationOption';
import { MdDialog } from '@angular/material';
import { TechInterviewComponent } from '../tech-interview/tech-interview.component';

export enum NotificationType {
  Reminders,
  News,
  Assignments,
  Interview,
}

@Component({
  selector: 'notification',
  templateUrl: 'notification.component.html',
  styleUrls: ['notification.component.scss'],
})

export class NotificationComponent implements OnInit {
  @Input() notification: INotificationOption;

  constructor(public dialog: MdDialog) { }

  ngOnInit() { }

  openInterview() {
    this.dialog.open(TechInterviewComponent, {
      data: {
        id: this.notification.techInterview.id,
        primarySkill: this.notification.techInterview.techSkill,
      },
    });
  }
}
