import { NgModule } from '@angular/core';

import { CandidateDetailComponent } from './candidate-detail-card.component';
import { CommonModule } from '@angular/common';
import { PositionPreviewModule } from '../position-preview-card/position-preview-card.module';

@NgModule({
  imports: [
    CommonModule,
    PositionPreviewModule,
  ],
  exports: [CandidateDetailComponent],
  declarations: [CandidateDetailComponent],
  providers: [],
})
export class CandidateDetailModule { }
