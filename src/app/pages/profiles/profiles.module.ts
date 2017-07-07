import { NgModule } from '@angular/core';

import { ProfilesComponent } from './profiles.component';
import { ProfilesRoutingModule } from './profiles.state';

@NgModule({
  declarations: [
    ProfilesComponent,
  ],
  imports: [
    ProfilesRoutingModule,
  ],
  providers: []
})
export class ProfilesModule { }