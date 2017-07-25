import { NgModule } from '@angular/core';

import { SkillFormComponent } from './skill-form.component';
import { SelectFormModule } from '../select-form/select-form.module';
import { RangeFormModule } from '../range-form/range-form.module';

@NgModule({
  imports: [
    SelectFormModule,
    RangeFormModule,
  ],
  exports: [SkillFormComponent],
  declarations: [SkillFormComponent],
  providers: [],
})
export class SkillFormModule { }
