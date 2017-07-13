import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OpenPositionsComponent } from './open-positions.component';
import { PositionModule } from '../../../components/position-card/position-card.module';

@NgModule({
  imports: [
    PositionModule,
    CommonModule,
  ],
  exports: [],
  declarations: [OpenPositionsComponent],
  providers: [],
})
export class OpenPositionsModule { }
