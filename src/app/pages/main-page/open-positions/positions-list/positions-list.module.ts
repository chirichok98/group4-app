import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PositionsListComponent } from './positions-list.component';
import { PositionPreviewModule } from '../../../../components/position-card/position-card.module';
import { PositionsListService } from './positions-list.service';

@NgModule({
  imports: [
    RouterModule,
    PositionPreviewModule,
    CommonModule,
  ],
  exports: [RouterModule],
  declarations: [PositionsListComponent],
  providers: [PositionsListService],
})
export class PositionsListModule { }
