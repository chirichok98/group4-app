import { NgModule } from '@angular/core';

import { CandidatesComponent } from './candidates.component';
import { CandidateCardModule } from '../../../components/candidate-card/candidate-card.module';

@NgModule({
  imports: [CandidateCardModule],
  exports: [],
  declarations: [CandidatesComponent],
  providers: [],
})
export class CandidatesModule { }
