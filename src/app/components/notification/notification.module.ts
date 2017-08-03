import { NgModule } from '@angular/core';

import { NotificationComponent } from './notification.component';
import { CommonModule } from '@angular/common';
import { TechInterviewComponent } from '../tech-interview/tech-interview.component';
import { FormsModule } from '@angular/forms';
import { TechInterviewModule } from '../tech-interview/tech-interview.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TechInterviewModule,
  ],
  exports: [NotificationComponent],
  declarations: [NotificationComponent],
  providers: [],
  entryComponents: [TechInterviewComponent],
})
export class NotificationModule { }
