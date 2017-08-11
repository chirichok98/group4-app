import { NgModule } from '@angular/core';

import { InputPositionComponent } from './input-position.component';
import { DictionariesService } from '../../services/dictionaries.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DatepickerFormModule } from '../datepicker-form/datepicker-form.module';
import { SelectFormModule } from '../select-form/select-form.module';
import { SkillFormModule } from '../skill-form/skill-form.module';
import { MaterialModule } from '@angular/material';
import { PositionService } from '../../services/position.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DatepickerFormModule,
    SelectFormModule,
    SkillFormModule,
    MaterialModule,
  ],
  exports: [InputPositionComponent],
  declarations: [InputPositionComponent],
  providers: [DictionariesService],
})
export class InputPositionModule { }
