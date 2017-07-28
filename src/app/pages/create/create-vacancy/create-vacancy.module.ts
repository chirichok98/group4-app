import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { CreateVacancyComponent } from './create-vacancy.component';
import { SelectFormModule } from '../../../components/select-form/select-form.module';
import { DatepickerFormModule } from '../../../components/datepicker-form/datepicker-form.module';
import { RangeFormModule } from '../../../components/range-form/range-form.module';
import { SkillFormModule } from '../../../components/skill-form/skill-form.module';
import { DictionariesService } from '../../../services/dictionaries.service';
import { CreateVacancyService } from '../../../services/create-vacancy.service';
import { MaterialModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SelectFormModule,
    DatepickerFormModule,
    SkillFormModule,
    MaterialModule,
  ],
  exports: [],
  declarations: [CreateVacancyComponent],
  providers: [
    DictionariesService,
    CreateVacancyService,
  ],
})
export class CreateVacancyModule { }
