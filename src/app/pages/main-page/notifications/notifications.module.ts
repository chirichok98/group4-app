import { NgModule } from '@angular/core';


import { NotificationsComponent } from './notifications.component';
import { NotificationModule } from '../../../components/notification/notification.module';

@NgModule({
  imports: [NotificationModule],
  exports: [],
  declarations: [NotificationsComponent],
  providers: [],
})
export class NotificationsModule { }
