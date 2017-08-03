import { NgModule } from '@angular/core';

import { CandidateDetailComponent } from './candidate-detail-card.component';
import { CommonModule } from '@angular/common';
import { PositionPreviewModule } from '../position-preview-card/position-preview-card.module';
import { SpinnerModule } from '../spinner/spinner.module';
import { MaterialModule } from '@angular/material';
import { DownloadService } from '../../services/download.service';
import { ModalComponent } from '../modal/modal.component';
import { ModalModule } from '../modal/modal.module';
import { CandidateService } from '../../services/candidate.service';
import { RangeFormModule } from '../range-form/range-form.module';

@NgModule({
  imports: [
    CommonModule,
    SpinnerModule,
    PositionPreviewModule,
    MaterialModule,
    ModalModule,
    RangeFormModule,
  ],
  exports: [CandidateDetailComponent],
  declarations: [CandidateDetailComponent],
  providers: [
    DownloadService,
    CandidateService,
  ],
  entryComponents: [ModalComponent],
})
export class CandidateDetailModule { }
