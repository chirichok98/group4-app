import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MainPageComponent } from './main-page.component';
import { MainPageRoutingModule } from './main-page.state';
import { NavbarModule } from '../../components/navbar/navbar.module';
import { CandidatesModule } from './candidates/candidates.module';
import { OpenPositionsModule } from './open-positions/open-positions.module';
import { NotificationsModule } from './notifications/notifications.module';

@NgModule({
  imports: [
    RouterModule,
    MainPageRoutingModule,
    NavbarModule,
    CandidatesModule,
    OpenPositionsModule,
    NotificationsModule,
  ],
  exports: [],
  declarations: [MainPageComponent],
  providers: [],
})
export class MainPageModule { }
