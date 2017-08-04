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
  id: number;
  skill: string;
  constructor(public dialog: MdDialog) { }

  ngDoCheck() {
    if (this.notification) {
      if (this.notification.techInterview) {
        this.type = 'tech';
        this.id = this.notification.techInterview.id;
        this.skill = this.notification.techInterview.techSkill;
      }
      if (this.notification.generalInterview) {
        this.type = 'general';
        this.id = this.notification.generalInterview.id;
      }
    }
  }

  openInterview() {
    this.dialog.open(InterviewFeedbackComponent, {
      data: {
        id: this.id,
        type: this.type,
        primarySkill: this.skill,
      },
    });
  }
}
