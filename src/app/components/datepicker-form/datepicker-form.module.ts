import { NgModule } from '@angular/core';

import { DatepickerFormComponent } from './datepicker-form.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [DatepickerFormComponent],
  declarations: [DatepickerFormComponent],
  providers: [],
})
export class DatepickerFormModule { }
