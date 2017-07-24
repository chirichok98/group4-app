import { NgModule } from '@angular/core';

import { DatepickerFormComponent } from './datepicker-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [FormsModule],
  exports: [DatepickerFormComponent],
  declarations: [DatepickerFormComponent],
  providers: [],
})
export class DatepickerFormModule { }
