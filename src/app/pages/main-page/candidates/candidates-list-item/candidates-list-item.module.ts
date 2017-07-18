import { NgModule } from '@angular/core';

import { CandidatesListItemComponent } from './candidates-list-item.component';
// tslint:disable-next-line:max-line-length
import { CandidateDetailModule } from '../../../../components/candidate-detail-card/candidate-detail-card.module';
import { CandidatesListItemService } from './candidates-list-item.service';

@NgModule({
  imports: [CandidateDetailModule],
  exports: [],
  declarations: [CandidatesListItemComponent],
  providers: [CandidatesListItemService],
})
export class CandidatesListItemModule { }
