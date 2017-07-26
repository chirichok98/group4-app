import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { CreateVacancyComponent } from './create-vacancy.component';
import { SelectFormModule } from '../../../components/select-form/select-form.module';
import { DatepickerFormModule } from '../../../components/datepicker-form/datepicker-form.module';
import { HelpService } from '../help.service';
import { RangeFormModule } from '../../../components/range-form/range-form.module';
import { CreateVacancyService } from './create-vacancy.service';
import { SkillFormModule } from '../../../components/skill-form/skill-form.module';

@NgModule({
  imports: [
    HttpModule,
    CommonModule,
    FormsModule,
    SelectFormModule,
    DatepickerFormModule,
    SkillFormModule,
  ],
  exports: [],
  declarations: [CreateVacancyComponent],
  providers: [
    HelpService,
    CreateVacancyService,
  ],
})
export class CreateVacancyModule { }
