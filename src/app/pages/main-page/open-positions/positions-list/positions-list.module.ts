import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PositionsListComponent } from './positions-list.component';
// tslint:disable-next-line:max-line-length
import { PositionPreviewModule } from '../../../../components/position-preview-card/position-preview-card.module';
import { PositionsListService } from './positions-list.service';
import { HttpModule } from '@angular/http';

@NgModule({
  imports: [
    HttpModule,
    RouterModule,
    PositionPreviewModule,
    CommonModule,
  ],
  exports: [RouterModule],
  declarations: [PositionsListComponent],
  providers: [PositionsListService],
})
export class PositionsListModule { }
