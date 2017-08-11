import { NgModule } from '@angular/core';

import { BasketComponent } from './basket.component';
import { MaterialModule } from '@angular/material';
import { CandidatePreviewModule } from '../candidate-preview-card/candidate-preview-card.module';
import { PositionPreviewModule } from '../position-preview-card/position-preview-card.module';
import { CommonModule } from '@angular/common';
import { CandidateService } from '../../services/candidate.service';
import { PositionService } from '../../services/position.service';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    CandidatePreviewModule,
    PositionPreviewModule,
  ],
  exports: [BasketComponent],
  declarations: [BasketComponent],
  providers: [
    CandidateService,
    PositionService,
  ],
})
export class BasketModule { }
