import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StaffComponent } from './staff.component';

const staffRoutes: Routes = [
  {
    path: 'staff',
    component: StaffComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(staffRoutes),
  ],
  exports: [
    RouterModule,
  ],
})
export class StaffRoutingModule { }