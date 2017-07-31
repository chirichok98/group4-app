import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { CandidatesListComponent } from './candidates-list.component';
// tslint:disable-next-line:max-line-length
import { CandidatePreviewModule } from '../../../../components/candidate-preview-card/candidate-preview-card.module';
import { SpinnerModule } from '../../../../components/spinner/spinner.module';
import { PagerModule } from '../../../../directives/pager/pager.module';
import { CandidatesListService } from '../../../../services/candidates-list.service';
import { PagerService } from '../../../../services/pager.service';

import { PagerDirective } from '../../../../directives/pager/pager.directive';

@NgModule({
  imports: [
    HttpModule,
    RouterModule,
    CandidatePreviewModule,
    CommonModule,
    SpinnerModule,
    PagerModule,
  ],
  exports: [RouterModule],
  declarations: [CandidatesListComponent],
  providers: [CandidatesListService, PagerService],
})
export class CandidatesListModule { }
