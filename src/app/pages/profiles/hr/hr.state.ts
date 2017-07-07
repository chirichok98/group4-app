import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HRComponent } from './hr.component';

const hrRoutes: Routes = [
  {
    path: 'hr',
    component: HRComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(hrRoutes),
  ],
  exports: [
    RouterModule,
  ],
})
export class HRRoutingModule { }