import { NgModule } from '@angular/core';

import { InterviewFeedbackComponent } from './interview-feedback.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { RangeFormModule } from '../range-form/range-form.module';
import { InterviewService } from '../../services/interview.service';
import { SelectFormModule } from '../select-form/select-form.module';
import { DictionariesService } from '../../services/dictionaries.service';
import { SnackbarService } from '../../services/snackbar.service';
import { DatepickerFormModule } from '../datepicker-form/datepicker-form.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    RangeFormModule,
    SelectFormModule,
    DatepickerFormModule,
  ],
  exports: [InterviewFeedbackComponent],
  declarations: [InterviewFeedbackComponent],
  providers: [
    InterviewService,
    DictionariesService,
    SnackbarService,
  ],
})
export class InterviewFeedbackModule { }
