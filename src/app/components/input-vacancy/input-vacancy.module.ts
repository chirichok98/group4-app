import { NgModule } from '@angular/core';

import { InputVacancyComponent } from './input-vacancy.component';
import { CreateVacancyService } from '../../services/create-vacancy.service';
import { DictionariesService } from '../../services/dictionaries.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DatepickerFormModule } from '../datepicker-form/datepicker-form.module';
import { SelectFormModule } from '../select-form/select-form.module';
import { SkillFormModule } from '../skill-form/skill-form.module';
import { MaterialModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DatepickerFormModule,
    SelectFormModule,
    SkillFormModule,
    MaterialModule,
  ],
  exports: [InputVacancyComponent],
  declarations: [InputVacancyComponent],
  providers: [
    DictionariesService,
    CreateVacancyService,
  ],
})
export class InputVacancyModule { }
