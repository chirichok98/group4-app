import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ProfilesComponent } from './profiles.component';
import { ProfilesRoutingModule } from './profiles.state';
import { AdminModule } from './admin/admin.module';
import { HRModule } from './hr/hr.module';
import { StaffModule } from './staff/staff.module';

@NgModule({
  declarations: [
    ProfilesComponent,
  ],
  imports: [
    BrowserModule,
    ProfilesRoutingModule,
    AdminModule,
    HRModule,
    StaffModule,
  ],
  providers: []
})
export class ProfilesModule { }