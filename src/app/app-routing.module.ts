import { NgModule } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';

import { ReportComponent } from './pages/report/report.component';
// tslint:disable-next-line:max-line-length
import { CreateCandidateComponent } from './pages/create/create-candidate/create-candidate.component';
import { CreateVacancyComponent } from './pages/create/create-vacancy/create-vacancy.component';

const mainRoute: Route = {
  path: '',
  redirectTo: 'home',
  pathMatch: 'full',
};
const reportRoute: Route = {
  path: 'report',
  component: ReportComponent,
};
const creatingRoute: Route = {
  path: 'create',
  children: [
    {
      path: '',
      redirectTo: 'candidate',
      pathMatch: 'full',
    },
    {
      path:'candidate',
      component: CreateCandidateComponent,
    },
    {
      path:'vacancy',
      component: CreateVacancyComponent,
    },
  ],
};

export const routes: Routes = [
  mainRoute,
  reportRoute,
  creatingRoute,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
