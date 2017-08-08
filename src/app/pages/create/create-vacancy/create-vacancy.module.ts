import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';

import { CreateVacancyComponent } from './create-position.component';
import { SelectFormModule } from '../../../components/select-form/select-form.module';
import { DatepickerFormModule } from '../../../components/datepicker-form/datepicker-form.module';
import { RangeFormModule } from '../../../components/range-form/range-form.module';
import { SkillFormModule } from '../../../components/skill-form/skill-form.module';
import { DictionariesService } from '../../../services/dictionaries.service';
import { InputVacancyModule } from '../../../components/input-position/input-position.module';
import { SnackbarService } from '../../../services/snackbar.service';
import { PositionService } from '../../../services/position.service';

@NgModule({
  imports: [
    CommonModule,
    InputVacancyModule,
  ],
  exports: [],
  declarations: [CreateVacancyComponent],
  providers: [
    PositionService,
    SnackbarService,
  ],
})
export class CreateVacancyModule { }
