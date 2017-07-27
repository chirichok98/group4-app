import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProfilesComponent } from './profiles.component';
import { AdminComponent } from './admin/admin.component';
import { HRComponent } from './hr/hr.component';
import { StaffComponent } from './staff/staff.component';

const profilesRoutes: Routes = [
  {
    path: 'profiles',
    component: ProfilesComponent,
    children: [
      {
        path: 'admin',
        component: AdminComponent,
      },
      {
        path: 'hr',
        component: HRComponent,
      },
      {
        path: 'staff',
        component: StaffComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(profilesRoutes)],
  exports: [RouterModule],
})
export class ProfilesRoutingModule { }
