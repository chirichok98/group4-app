import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { PositionsListComponent } from './positions-list.component';
// tslint:disable-next-line:max-line-length
import { PositionPreviewModule } from '../../../../components/position-preview-card/position-preview-card.module';
import { SpinnerModule } from '../../../../components/spinner/spinner.module';
import { PositionsListService } from '../../../../services/positions-list.service';

@NgModule({
  imports: [
    HttpModule,
    RouterModule,
    PositionPreviewModule,
    CommonModule,
    SpinnerModule,
  ],
  exports: [RouterModule],
  declarations: [PositionsListComponent],
  providers: [PositionsListService],
})
export class PositionsListModule { }
