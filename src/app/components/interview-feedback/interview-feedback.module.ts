import { NgModule } from '@angular/core';

import { InterviewFeedbackComponent } from './interview-feedback.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { RangeFormModule } from '../range-form/range-form.module';
import { InterviewService } from '../../services/interview.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    RangeFormModule,
  ],
  exports: [InterviewFeedbackComponent],
  declarations: [InterviewFeedbackComponent],
  providers: [InterviewService],
})
export class InterviewFeedbackModule { }
