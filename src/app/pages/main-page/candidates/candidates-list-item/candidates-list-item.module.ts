import { NgModule } from '@angular/core';

import { CandidatesListItemComponent } from './candidates-list-item.component';
// tslint:disable-next-line:max-line-length
import { CandidateDetailModule } from '../../../../components/candidate-detail-card/candidate-detail-card.module';
import { CommonModule } from '@angular/common';
import { CandidateService } from '../../../../services/candidate.service';
import { BreadCrumbsModule } from '../../../../components/bread-crumbs/bread-crumbs.module';
@NgModule({
  imports: [
    CandidateDetailModule,
    CommonModule,
    BreadCrumbsModule,
  ],
  exports: [],
  declarations: [CandidatesListItemComponent],
  providers: [CandidateService],
})
export class CandidatesListItemModule { }
