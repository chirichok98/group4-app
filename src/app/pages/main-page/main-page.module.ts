import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MainPageComponent } from './main-page.component';
import { MainPageRoutingModule } from './main-page.state';
import { NavbarModule } from '../../components/navbar/navbar.module';
import { CandidatesModule } from './candidates/candidates.module';
import { NotificationsModule } from './notifications/notifications.module';
import { PositionsListModule } from './open-positions/positions-list/positions-list.module';
// tslint:disable-next-line:max-line-length
import { PositionsListItemModule } from './open-positions/positions-list-item/positions-list-item.module';
import { OpenPositionsModule } from './open-positions/open-positions.module';
import { CookieModule } from 'ngx-cookie';
import { MaterialModule } from '@angular/material';
import { BasketModule } from '../../components/basket/basket.module';
import { BasketComponent } from '../../components/basket/basket.component';
import { CandidateService } from '../../services/candidate.service';

@NgModule({
  imports: [
    CookieModule.forChild(),
    RouterModule,
    MainPageRoutingModule,
    NavbarModule,
    CandidatesModule,
    OpenPositionsModule,
    NotificationsModule,
    MaterialModule,
    BasketModule,
  ],
  exports: [],
  declarations: [MainPageComponent],
  providers: [CandidateService],
  entryComponents: [BasketComponent],
})
export class MainPageModule { }
