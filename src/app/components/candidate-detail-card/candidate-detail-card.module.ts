import { NgModule } from '@angular/core';

import { CandidateDetailComponent } from './candidate-detail-card.component';
import { CommonModule } from '@angular/common';
import { SpinnerModule } from '../spinner/spinner.module';
import { MaterialModule } from '@angular/material';
import { DownloadService } from '../../services/download.service';
// tslint:disable-next-line:max-line-length
import { AssignInterviewFormComponent } from '../assign-interview-form/assign-interview-form.component';
import { AssignInterviewFormModule } from '../assign-interview-form/assign-interview-form.module';
import { CandidateService } from '../../services/candidate.service';
import { RangeFormModule } from '../range-form/range-form.module';
// tslint:disable-next-line:max-line-length
import { PositionPreviewCardMiniModule } from '../position-preview-mini/position-preview-mini.module';

@NgModule({
  imports: [
    CommonModule,
    SpinnerModule,
    MaterialModule,
    AssignInterviewFormModule,
    RangeFormModule,
    PositionPreviewCardMiniModule,
  ],
  exports: [CandidateDetailComponent],
  declarations: [CandidateDetailComponent],
  providers: [
    DownloadService,
    CandidateService,
  ],
  entryComponents: [AssignInterviewFormComponent],
})
export class CandidateDetailModule { }
