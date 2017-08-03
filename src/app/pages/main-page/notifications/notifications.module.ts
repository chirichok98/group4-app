import { NgModule } from '@angular/core';

import { NotificationsComponent } from './notifications.component';
import { NotificationModule } from '../../../components/notification/notification.module';
import { CommonModule } from '@angular/common';
import { NotificationService } from '../../../services/notifications.service';

@NgModule({
  imports: [
    NotificationModule, 
    CommonModule,
  ],
  exports: [],
  declarations: [NotificationsComponent],
  providers: [NotificationService],
})
export class NotificationsModule { }
