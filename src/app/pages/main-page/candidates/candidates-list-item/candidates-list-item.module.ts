import { NgModule } from '@angular/core';

import { CandidatesListItemComponent } from './candidates-list-item.component';
// tslint:disable-next-line:max-line-length
import { CandidateDetailModule } from '../../../../components/candidate-detail-card/candidate-detail-card.module';
import { CommonModule } from '@angular/common';
import { CandidatesListItemService } from '../../../../services/candidates-list-item.service';

@NgModule({
  imports: [
    CandidateDetailModule,
    CommonModule,
  ],
  exports: [],
  declarations: [CandidatesListItemComponent],
  providers: [CandidatesListItemService],
})
export class CandidatesListItemModule { }
