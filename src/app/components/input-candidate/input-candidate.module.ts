import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';

import { InputCandidateComponent } from './input-candidate.component';
import { DictionariesService } from '../../services/dictionaries.service';
import { SelectFormModule } from '../select-form/select-form.module';
import { SkillFormModule } from '../skill-form/skill-form.module';
import { DatepickerFormModule } from '../datepicker-form/datepicker-form.module';
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
  providers: [DictionariesService],
})
export class InputCandidateModule { }
