import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { CreateCandidateComponent } from './create-candidate.component';
import { ContactsFormModule } from '../../../components/contacts-form/contacts-form.module';
import { PrevJobFormModule } from '../../../components/prev-job-form/prev-job-form.module';
import { SelectFormModule } from '../../../components/select-form/select-form.module';
import { DatepickerFormModule } from '../../../components/datepicker-form/datepicker-form.module';
import { RangeFormModule } from '../../../components/range-form/range-form.module';
import { SkillFormModule } from '../../../components/skill-form/skill-form.module';
import { DictionariesService } from '../../../services/dictionaries.service';
import { CreateCandidateService } from '../../../services/create-candidate.service';
import { HttpService } from '../../../services/http.service';
import { MaterialModule } from '@angular/material';

@NgModule({
  imports: [
    MaterialModule,
    FormsModule,
    ContactsFormModule,
    PrevJobFormModule,
    SelectFormModule,
    DatepickerFormModule,
    CommonModule,
    SkillFormModule,
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
