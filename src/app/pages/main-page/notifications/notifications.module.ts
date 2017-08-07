import { NgModule } from '@angular/core';

import { NotificationsComponent } from './notifications.component';
import { NotificationModule } from '../../../components/notification/notification.module';
import { CommonModule } from '@angular/common';
import { NotificationService } from '../../../services/notifications.service';
<<<<<<< HEAD
import { BreadCrumbsModule } from '../../../components/bread-crumbs/bread-crumbs.module';
=======
import { SpinnerModule } from '../../../components/spinner/spinner.module';
>>>>>>> 7720ffb55ecb9ca10731cbb5a36dab28f66147de

@NgModule({
  imports: [
    NotificationModule, 
    CommonModule,
<<<<<<< HEAD
    BreadCrumbsModule,
=======
    SpinnerModule,
>>>>>>> 7720ffb55ecb9ca10731cbb5a36dab28f66147de
  ],
  exports: [],
  declarations: [NotificationsComponent],
  providers: [NotificationService],
})
export class NotificationsModule { }
