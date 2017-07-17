import { Component, OnInit, Input } from '@angular/core';
export enum NotificationType {
  Reminders,
  News,
  Assignments
}

export interface NotificationOption {
  type: NotificationType;
  date: Date;
  description: String;
}

@Component({
    selector: 'notification',
    templateUrl: 'notification.component.html',
    styleUrls: ['notification.component.scss'],
})

export class NotificationComponent implements OnInit {
    @Input() notification:NotificationOption;
    currentNotification:NotificationOption; 
    constructor() { }

    ngOnInit() { 
        this.currentNotification = this.notification;
    }
}