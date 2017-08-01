import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PositionDetailComponent } from './position-detail-card.component';
import { SpinnerModule } from '../spinner/spinner.module';
import { CandidatePreviewModule } from '../candidate-preview-card/candidate-preview-card.module';
import { MaterialModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    SpinnerModule,
    CandidatePreviewModule,
    MaterialModule,
  ],
  exports: [PositionDetailComponent],
  declarations: [PositionDetailComponent],
  providers: [],
})
export class PositionDetailModule { }
