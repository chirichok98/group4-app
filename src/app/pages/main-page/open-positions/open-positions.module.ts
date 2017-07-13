import { NgModule } from '@angular/core';

import { OpenPositionsComponent } from './open-positions.component';
import { PositionModule } from '../../../components/position/position.module';
 
@NgModule({
  imports: [PositionModule],
  exports: [],
  declarations: [OpenPositionsComponent],
  providers: [],
})
export class OpenPositionsModule { }
