import { NgModule } from '@angular/core';

import { SortComponent } from './sort.component';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [SortComponent],
  declarations: [SortComponent],
  providers: [],
})
export class SortModule { }
