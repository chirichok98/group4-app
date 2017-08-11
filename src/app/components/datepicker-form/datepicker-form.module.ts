import { NgModule } from '@angular/core';

import { DatepickerFormComponent } from './datepicker-form.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MdDatepickerModule, MaterialModule, MdNativeDateModule } from '@angular/material';

@NgModule({
  imports: [
    MdDatepickerModule,
    CommonModule,
    FormsModule,
    MaterialModule,
    MdNativeDateModule,
  ],
  exports: [DatepickerFormComponent],
  declarations: [DatepickerFormComponent],
  providers: [],
})
export class DatepickerFormModule { }
