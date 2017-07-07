import { NgModule } from '@angular/core';

import { StaffComponent } from './staff.component';
import { StaffRoutingModule } from './staff.state';

@NgModule({
  declarations: [
    StaffComponent,
  ],
  imports: [
    StaffRoutingModule,
  ],
  providers: [],
})
export class StaffModule { }