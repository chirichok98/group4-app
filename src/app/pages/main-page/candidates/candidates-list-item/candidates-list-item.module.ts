import { NgModule } from '@angular/core';

import { CandidatesListItemComponent } from './candidates-list-item.component';
// tslint:disable-next-line:max-line-length
import { CandidateDetailCardModule } from '../../../../components/candidate-detail-card/candidate-detail-card.module';

@NgModule({
  imports: [CandidateDetailCardModule],
  exports: [],
  declarations: [CandidatesListItemComponent],
  providers: [],
})
export class CandidatesListItemModule { }
