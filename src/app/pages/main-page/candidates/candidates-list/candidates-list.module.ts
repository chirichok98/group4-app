import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { CandidatesListComponent } from './candidates-list.component';
import { CandidateCardModule } from '../../../../components/candidate-card/candidate-card.module';

@NgModule({
  imports: [
    RouterModule,
    CandidateCardModule,
    CommonModule,
  ],
  exports: [RouterModule],
  declarations: [CandidatesListComponent],
  providers: [],
})
export class CandidatesListModule { }
