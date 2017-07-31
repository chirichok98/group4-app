import { NgModule } from '@angular/core';

import { CandidatesComponent } from './candidates.component';
import { CandidatesListModule } from './candidates-list/candidates-list.module';
import { CandidatesListItemModule } from './candidates-list-item/candidates-list-item.module';

@NgModule({
  imports: [
    CandidatesListModule,
    CandidatesListItemModule,
  ],
  exports: [],
  declarations: [CandidatesComponent],
  providers: [],
})
export class CandidatesModule { }
