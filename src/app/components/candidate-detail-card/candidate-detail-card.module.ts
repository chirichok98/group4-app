import { NgModule } from '@angular/core';

import { CandidateDetailComponent } from './candidate-detail-card.component';
import { CommonModule } from '@angular/common';
import { PositionPreviewModule } from '../position-preview-card/position-preview-card.module';
import { SpinnerModule } from '../spinner/spinner.module';
import { MaterialModule } from '@angular/material';
import { DownloadService } from '../../services/download.service';
import { ModalComponent } from '../modal/modal.component';
import { ModalModule } from '../modal/modal.module';

@NgModule({
  imports: [
    CommonModule,
    SpinnerModule,
    PositionPreviewModule,
    MaterialModule,
    ModalModule,
  ],
  exports: [CandidateDetailComponent],
  declarations: [CandidateDetailComponent],
  providers: [DownloadService],
  entryComponents: [ModalComponent],
})
export class CandidateDetailModule { }
