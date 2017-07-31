import { NgModule } from '@angular/core';

import { NotificationComponent } from './notification.component';
import { CommonModule } from '@angular/common';
import { TableSortingExampleModule } from '../table-sorting-example/table-sorting-example.module';



@NgModule({
  imports: [
    CommonModule,
    TableSortingExampleModule,
  ],
  exports: [
    NotificationComponent, 
  ],
  declarations: [NotificationComponent],
  providers: [],
})
export class NotificationModule { }
