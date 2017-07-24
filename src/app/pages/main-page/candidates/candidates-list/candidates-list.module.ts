import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { CandidatesListComponent } from './candidates-list.component';
// tslint:disable-next-line:max-line-length
import { CandidatePreviewModule } from '../../../../components/candidate-preview-card/candidate-preview-card.module';
import { CandidatesListService } from './candidates-list.service';
import { SpinnerModule } from '../../../../components/spinner/spinner.module';

@NgModule({
  imports: [
    RouterModule,
    CandidatePreviewModule,
    CommonModule,
    SpinnerModule,
  ],
  exports: [RouterModule],
  declarations: [CandidatesListComponent],
  providers: [CandidatesListService],
})
export class CandidatesListModule { }
