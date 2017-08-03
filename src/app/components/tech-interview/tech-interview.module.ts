import { NgModule } from '@angular/core';

import { TechInterviewComponent } from './tech-interview.component';
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
  exports: [TechInterviewComponent],
  declarations: [TechInterviewComponent],
  providers: [InterviewService],
})
export class TechInterviewModule { }
