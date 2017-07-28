import { NgModule } from '@angular/core';

import { SelectFormComponent } from './select-form.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RangeFormModule } from '../range-form/range-form.module';
import { MaterialModule } from '@angular/material';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    MaterialModule,
  ],
  exports: [SelectFormComponent],
  declarations: [SelectFormComponent],
  providers: [],
})
export class SelectFormModule { }
