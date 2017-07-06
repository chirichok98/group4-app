import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home.state';
import { HomeComponent } from './home.component';
// add HomeService

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    HomeRoutingModule,
  ],
  providers: [/*HomeService*/],
})
export class HomeModule { }
