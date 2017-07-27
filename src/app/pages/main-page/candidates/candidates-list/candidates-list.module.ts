import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { CandidatesListComponent } from './candidates-list.component';
// tslint:disable-next-line:max-line-length
import { CandidatePreviewModule } from '../../../../components/candidate-preview-card/candidate-preview-card.module';
import { SpinnerModule } from '../../../../components/spinner/spinner.module';
import { CandidatesListService } from '../../../../services/candidates-list.service';
import { PagerService } from '../../../../services/pager.service';

import { PagerDirective } from '../../../../services/pager.directive';

@NgModule({
  imports: [
    RouterModule,
    CandidatePreviewModule,
    CommonModule,
    SpinnerModule,
  ],
  exports: [RouterModule],
  declarations: [CandidatesListComponent, PagerDirective],
  providers: [CandidatesListService, PagerService],
})
export class CandidatesListModule { }
