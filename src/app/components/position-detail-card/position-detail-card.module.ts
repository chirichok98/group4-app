import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PositionDetailComponent } from './position-detail-card.component';
import { SpinnerModule } from '../spinner/spinner.module';
import { CandidatePreviewModule } from '../candidate-preview-card/candidate-preview-card.module';
import { MaterialModule } from '@angular/material';
import { RangeFormModule } from '../range-form/range-form.module';

@NgModule({
  imports: [
    CommonModule,
    SpinnerModule,
    CandidatePreviewModule,
    MaterialModule,
    RangeFormModule,
  ],
  exports: [PositionDetailComponent],
  declarations: [PositionDetailComponent],
  providers: [],
})
export class PositionDetailModule { }
