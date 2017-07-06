import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchComponent } from './pages/search/search.component';
import { ReportComponent } from './pages/report/report.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'search',
    component: SearchComponent,
  },
  {
    path: 'report',
    component: ReportComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    ],
  exports: [
    RouterModule,
    ],
})

export class AppRoutingModule { }
