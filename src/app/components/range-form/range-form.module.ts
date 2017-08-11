import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MdSliderModule } from '@angular/material';

import { RangeFormComponent } from './range-form.component';

@NgModule({
  imports: [
    FormsModule,
    MdSliderModule,
  ],
  exports: [RangeFormComponent],
  declarations: [RangeFormComponent],
  providers: [],
})
export class RangeFormModule { }
