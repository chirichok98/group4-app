import { NgModule } from '@angular/core';

import { PositionsListItemComponent } from './positions-list-item.component';
// tslint:disable-next-line:max-line-length
import { PositionDetailModule } from '../../../../components/position-detail-card/position-detail-card.module';

@NgModule({
  imports: [PositionDetailModule],
  exports: [],
  declarations: [PositionsListItemComponent],
  providers: [],
})
export class PositionsListItemModule { }
