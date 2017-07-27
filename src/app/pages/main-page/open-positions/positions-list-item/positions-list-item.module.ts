import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PositionsListItemComponent } from './positions-list-item.component';
// tslint:disable-next-line:max-line-length
import { PositionDetailModule } from '../../../../components/position-detail-card/position-detail-card.module';
import { PositionsListItemService } from '../../../../services/positions-list-item.service';

@NgModule({
  imports: [
    PositionDetailModule,
    CommonModule,
  ],
  exports: [],
  declarations: [PositionsListItemComponent],
  providers: [PositionsListItemService],
})
export class PositionsListItemModule { }
