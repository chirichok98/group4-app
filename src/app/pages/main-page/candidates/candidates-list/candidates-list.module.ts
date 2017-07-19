import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { CandidatesListComponent } from './candidates-list.component';
// tslint:disable-next-line:max-line-length
import { CandidatePreviewModule } from '../../../../components/candidate-preview-card/candidate-preview-card.module';
import { CandidatesListService } from './candidates-list.service';

@NgModule({
  imports: [
    HttpModule,
    RouterModule,
    CandidatePreviewModule,
    CommonModule,
  ],
  exports: [RouterModule],
  declarations: [CandidatesListComponent],
  providers: [CandidatesListService],
})
export class CandidatesListModule { }
