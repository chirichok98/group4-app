import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OpenPositionsComponent } from './open-positions.component';
import { PositionPreviewModule } from '../../../components/position-card/position-card.module';

@NgModule({
  imports: [
    PositionPreviewModule,
    CommonModule,
  ],
  exports: [],
  declarations: [OpenPositionsComponent],
  providers: [],
})
export class OpenPositionsModule { }
