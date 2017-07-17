import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainPageComponent } from './main-page.component';
import { CandidatesComponent } from './candidates/candidates.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { PositionsListComponent } from './open-positions/positions-list/positions-list.component';
// tslint:disable-next-line:max-line-length
import { PositionsListItemComponent } from './open-positions/positions-list-item/positions-list-item.component';

const mainPageRoutes: Routes = [
  {
    path: 'main-page',
    component: MainPageComponent,
    children: [
      {
        path: '',
        redirectTo: 'candidates',
        pathMatch: 'full',
      },
      {
        path: 'candidates',
        component: CandidatesComponent,
      },
      {
        path: 'vacancies',
        children: [
          {
            path: ':id',
            component: PositionsListItemComponent,
          },
          {
            path: '',
            component: PositionsListComponent,
          },
        ],
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
