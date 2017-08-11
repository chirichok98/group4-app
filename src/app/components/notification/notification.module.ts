import { NgModule } from '@angular/core';

import { NotificationComponent } from './notification.component';
import { CommonModule } from '@angular/common';
import { InterviewFeedbackComponent } from '../interview-feedback/interview-feedback.component';
import { FormsModule } from '@angular/forms';
import { InterviewFeedbackModule } from '../interview-feedback/interview-feedback.module';
import { MaterialModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    InterviewFeedbackModule,
    MaterialModule,
  ],
  exports: [NotificationComponent],
  declarations: [NotificationComponent],
  providers: [],
  entryComponents: [InterviewFeedbackComponent],
})
export class NotificationModule { }
