import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes, Route } from '@angular/router';

import { MainPageComponent } from './main-page.component';
import { CandidatesComponent } from './candidates/candidates.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { PositionsListComponent } from './open-positions/positions-list/positions-list.component';
// tslint:disable-next-line:max-line-length
import { PositionsListItemComponent } from './open-positions/positions-list-item/positions-list-item.component';
import { OpenPositionsComponent } from './open-positions/open-positions.component';
import { CandidatesListComponent } from './candidates/candidates-list/candidates-list.component';
// tslint:disable-next-line:max-line-length
import { CandidatesListItemComponent } from './candidates/candidates-list-item/candidates-list-item.component';

const candidateRoute: Route = {
  path: 'candidates',
  component: CandidatesComponent,
  children: [
    {
      path: ':name',
      component: CandidatesListItemComponent,
    },
    {
      path: '',
      component: CandidatesListComponent,
    },
  ],
};

const vacanciesRoute: Route = {
  path: 'vacancies',
  component: OpenPositionsComponent,
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
};

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
      candidateRoute,
      vacanciesRoute,
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
