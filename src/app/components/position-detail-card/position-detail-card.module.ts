import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PositionDetailComponent } from './position-detail-card.component';
import { SpinnerModule } from '../spinner/spinner.module';

@NgModule({
  imports: [
    CommonModule,
    SpinnerModule,
  ],
  exports: [PositionDetailComponent],
  declarations: [PositionDetailComponent],
  providers: [],
})
export class PositionDetailModule { }
