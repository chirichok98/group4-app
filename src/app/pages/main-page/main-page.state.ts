import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainPageComponent } from './main-page.component';
import { CandidatesComponent } from './candidates/candidates.component';
import { OpenPositionsComponent } from './open-positions/open-positions.component';
import { NotificationsComponent } from './notifications/notifications.component';

const mainPageRoutes: Routes = [
  {
    path: 'main-page',
    component: MainPageComponent,
    children: [
      {
        path: 'candidates',
        component: CandidatesComponent,
      },
      {
        path: 'vacancies',
        component: OpenPositionsComponent,
      },
      {
        path: 'notifications',
        component: NotificationsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(mainPageRoutes)],
  exports: [RouterModule],
})
export class MainPageRoutingModule { }
