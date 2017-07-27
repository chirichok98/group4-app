import { NgModule } from '@angular/core';

import { OpenPositionsComponent } from './open-positions.component';
import { PositionsListModule } from './positions-list/positions-list.module';
import { PositionsListItemModule } from './positions-list-item/positions-list-item.module';

@NgModule({
  imports: [
    PositionsListModule,
    PositionsListItemModule,
  ],
  exports: [],
  declarations: [OpenPositionsComponent],
  providers: [],
})
export class OpenPositionsModule { }
