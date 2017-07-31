import { NgModule } from '@angular/core';


import { NotificationsComponent } from './notifications.component';
import { NotificationModule } from '../../../components/notification/notification.module';
import { CommonModule } from '@angular/common';
import { TableSortingExampleModule } from '../../../components/table-sorting-example/table-sorting-example.module';

@NgModule({
  imports: [NotificationModule, CommonModule, TableSortingExampleModule],
  exports: [],
  declarations: [NotificationsComponent],
  providers: [],
})
export class NotificationsModule { }
