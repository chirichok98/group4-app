import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { CandidatesListComponent } from './candidates-list.component';
// tslint:disable-next-line:max-line-length
import { CandidatePreviewModule } from '../../../../components/candidate-preview-card/candidate-preview-card.module';

@NgModule({
  imports: [
    RouterModule,
    CandidatePreviewModule,
    CommonModule,
  ],
  exports: [RouterModule],
  declarations: [CandidatesListComponent],
  providers: [],
})
export class CandidatesListModule { }
