import { NgModule } from '@angular/core';

import { NotificationComponent } from './notification.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule],
  exports: [NotificationComponent],
  declarations: [NotificationComponent],
  providers: [],
})
export class NotificationModule { }