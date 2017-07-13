import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CandidatesComponent } from './candidates.component';
import { CandidateCardModule } from '../../../components/candidate-card/candidate-card.module';

@NgModule({
  imports: [
    CandidateCardModule,
    CommonModule,
  ],
  exports: [],
  declarations: [CandidatesComponent],
  providers: [],
})
export class CandidatesModule { }
