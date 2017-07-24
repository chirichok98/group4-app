import { NgModule } from '@angular/core';

import { SelectFormComponent } from './select-form.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
  ],
  exports: [SelectFormComponent],
  declarations: [SelectFormComponent],
  providers: [],
})
export class SelectFormModule { }
