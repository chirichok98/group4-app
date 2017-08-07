import { Component, Input, DoCheck, Output, EventEmitter } from '@angular/core';

import { INotificationOption } from '../../interfaces/INotificationOption';
import { MdDialog } from '@angular/material';
import { InterviewFeedbackComponent } from '../interview-feedback/interview-feedback.component';
import { MyCookieService } from '../../services/cookie.service';

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
  interviewStatus: boolean = false;
  constructor(public dialog: MdDialog, 
              private cookie: MyCookieService) { }

  ngDoCheck() {
    if (this.notification) {
      if (this.notification.techInterview) {
        this.type = 'tech';
        this.id = this.notification.techInterview.id;
        this.skill = this.notification.techInterview.techSkill;
        this.interviewStatus = this.notification.techInterview.status;
      }
      if (this.notification.generalInterview) {
        this.type = 'general';
        this.id = this.notification.generalInterview.id;
        this.interviewStatus = this.notification.generalInterview.status;
      }
    }
  }

  markAsRead() {
    this.cookie.toggleChecked(this.notification.id);
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
