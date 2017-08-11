import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';

import { CreateCandidateComponent } from './create-candidate.component';
import { DictionariesService } from '../../../services/dictionaries.service';
import { HttpService } from '../../../services/http.service';
import { InputCandidateModule } from '../../../components/input-candidate/input-candidate.module';
import { SnackbarService } from '../../../services/snackbar.service';
import { CandidateService } from '../../../services/candidate.service';

@NgModule({
  imports: [
    MaterialModule,
    FormsModule,
    InputCandidateModule,
  ],
  exports: [],
  declarations: [CreateCandidateComponent],
  providers: [
    CandidateService,
    DictionariesService,
    HttpService,
    SnackbarService,
  ],
})
export class CreateCandidateModule { }
