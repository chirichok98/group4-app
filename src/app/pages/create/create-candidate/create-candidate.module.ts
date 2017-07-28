import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { CreateCandidateComponent } from './create-candidate.component';
import { DictionariesService } from '../../../services/dictionaries.service';
import { CreateCandidateService } from '../../../services/create-candidate.service';
import { HttpService } from '../../../services/http.service';
import { MaterialModule } from '@angular/material';
import { InputCandidateModule } from '../../../components/input-candidate/input-candidate.module';

@NgModule({
  imports: [
    MaterialModule,
    FormsModule,
    InputCandidateModule,
  ],
  exports: [],
  declarations: [CreateCandidateComponent],
  providers: [
    CreateCandidateService,
    DictionariesService,
    HttpService,
  ],
})
export class CreateCandidateModule { }
