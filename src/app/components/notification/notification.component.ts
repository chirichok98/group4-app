import { Component, Input, DoCheck } from '@angular/core';

import { INotificationOption } from '../../interfaces/INotificationOption';
import { MdDialog } from '@angular/material';
import { InterviewFeedbackComponent } from '../interview-feedback/interview-feedback.component';

@Component({
  selector: 'notification',
  templateUrl: 'notification.component.html',
  styleUrls: ['notification.component.scss'],
})

export class NotificationComponent implements DoCheck {
  @Input() notification: INotificationOption;
  type: string;

  constructor(public dialog: MdDialog) { }

  ngDoCheck() {
    if (this.notification) {
      if (this.notification.techInterview) {
        this.type = 'tech';
      }
      if (this.notification.generalInterview) {
        this.type = 'general';
      }
    }
  }

  openInterview() {
    this.dialog.open(InterviewFeedbackComponent, {
      data: {
        id: this.notification.techInterview.id,
        type: this.type,
        primarySkill: this.notification.techInterview.techSkill,
      },
    });
  }
}
