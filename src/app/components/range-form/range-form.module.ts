import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { RangeFormComponent } from './range-form.component';

@NgModule({
  imports: [FormsModule],
  exports: [RangeFormComponent],
  declarations: [RangeFormComponent],
  providers: [],
})
export class RangeFormModule { }
