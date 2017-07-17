import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PositionsListComponent } from './positions-list.component';
import { PositionPreviewModule } from '../../../../components/position-card/position-card.module';
import { PositionsListItemModule } from '../positions-list-item/positions-list-item.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule,
    PositionPreviewModule,
    PositionsListItemModule,
    CommonModule,
  ],
  exports: [RouterModule],
  declarations: [PositionsListComponent],
  providers: [],
})
export class PositionsListModule { }
