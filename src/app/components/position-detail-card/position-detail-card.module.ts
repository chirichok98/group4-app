import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PositionDetailComponent } from './position-detail-card.component';
import { SpinnerModule } from '../spinner/spinner.module';
import { MaterialModule } from '@angular/material';
import { RangeFormModule } from '../range-form/range-form.module';
// tslint:disable-next-line:max-line-length
import { CandidatePreviewCardMiniModule } from '../candidate-preview-mini/candidate-preview-mini.module';

@NgModule({
  imports: [
    CommonModule,
    SpinnerModule,
    CandidatePreviewCardMiniModule,
    MaterialModule,
    RangeFormModule,
  ],
  exports: [PositionDetailComponent],
  declarations: [PositionDetailComponent],
  providers: [],
})
export class PositionDetailModule { }
