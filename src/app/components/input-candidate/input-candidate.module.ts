import { NgModule } from '@angular/core';

import { InputCandidateComponent } from './input-candidate.component';
import { DictionariesService } from '../../services/dictionaries.service';
import { CreateCandidateService } from '../../services/create-candidate.service';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { SelectFormModule } from '../select-form/select-form.module';
import { SkillFormModule } from '../skill-form/skill-form.module';
import { DatepickerFormModule } from '../datepicker-form/datepicker-form.module';
import { CommonModule } from '@angular/common';
import { ContactsFormModule } from '../contacts-form/contacts-form.module';
import { PrevJobFormModule } from '../prev-job-form/prev-job-form.module';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    MaterialModule,
    SelectFormModule,
    SkillFormModule,
    DatepickerFormModule,
    ContactsFormModule,
    PrevJobFormModule,
  ],
  exports: [InputCandidateComponent],
  declarations: [InputCandidateComponent],
  providers: [
    CreateCandidateService,
    DictionariesService,
  ],
})
export class InputCandidateModule { }
