import { NgModule } from '@angular/core';

import { EditCandidateComponent } from './edit-candidate.component';
import { InputCandidateModule } from '../../../components/input-candidate/input-candidate.module';
import { SpinnerModule } from '../../../components/spinner/spinner.module';
import { CandidatesListItemService } from '../../../services/candidates-list-item.service';
import { CommonModule } from '@angular/common';
import { EditCandidateService } from '../../../services/edit-candidate.service';

@NgModule({
  imports: [
    InputCandidateModule,
    SpinnerModule,
    CommonModule,
  ],
  exports: [],
  declarations: [EditCandidateComponent],
  providers: [EditCandidateService],
})
export class EditCandidateModule { }
