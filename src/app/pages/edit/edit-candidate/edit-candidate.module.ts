import { NgModule } from '@angular/core';

import { EditCandidateComponent } from './edit-candidate.component';
import { InputCandidateModule } from '../../../components/input-candidate/input-candidate.module';
import { SpinnerModule } from '../../../components/spinner/spinner.module';
import { CommonModule } from '@angular/common';
import { SnackbarService } from '../../../services/snackbar.service';
import { CandidateService } from '../../../services/candidate.service';

@NgModule({
  imports: [
    InputCandidateModule,
    SpinnerModule,
    CommonModule,
  ],
  exports: [],
  declarations: [EditCandidateComponent],
  providers: [
    CandidateService,
    SnackbarService,
  ],
})
export class EditCandidateModule { }
