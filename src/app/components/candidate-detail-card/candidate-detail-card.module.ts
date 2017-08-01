import { NgModule } from '@angular/core';

import { CandidateDetailComponent } from './candidate-detail-card.component';
import { CommonModule } from '@angular/common';
import { PositionPreviewModule } from '../position-preview-card/position-preview-card.module';
import { SpinnerModule } from '../spinner/spinner.module';
import { MaterialModule } from '@angular/material';
import { DownloadService } from '../../services/download.service';

@NgModule({
  imports: [
    CommonModule,
    SpinnerModule,
    PositionPreviewModule,
    MaterialModule,
  ],
  exports: [CandidateDetailComponent],
  declarations: [CandidateDetailComponent],
  providers: [DownloadService],
})
export class CandidateDetailModule { }
