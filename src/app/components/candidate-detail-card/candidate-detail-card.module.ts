import { NgModule } from '@angular/core';

import { CandidateDetailComponent } from './candidate-detail-card.component';
import { CommonModule } from '@angular/common';
import { PositionPreviewModule } from '../position-preview-card/position-preview-card.module';
import { SpinnerModule } from '../spinner/spinner.module';

@NgModule({
  imports: [
    CommonModule,
    SpinnerModule,
    PositionPreviewModule,
  ],
  exports: [CandidateDetailComponent],
  declarations: [CandidateDetailComponent],
  providers: [],
})
export class CandidateDetailModule { }
