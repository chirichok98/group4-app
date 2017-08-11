import { NgModule } from '@angular/core';

import { SkillFormComponent } from './skill-form.component';
import { SelectFormModule } from '../select-form/select-form.module';
import { RangeFormModule } from '../range-form/range-form.module';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    SelectFormModule,
    RangeFormModule,
    CommonModule,
  ],
  exports: [SkillFormComponent],
  declarations: [SkillFormComponent],
  providers: [],
})
export class SkillFormModule { }
