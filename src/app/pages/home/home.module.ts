import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home.state';
import { HomeComponent } from './home.component';
import { LoginFormModule } from '../../components/login/login.module';
// add HomeService

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    HomeRoutingModule,
    LoginFormModule,
  ],
  providers: [/*HomeService*/],
})
export class HomeModule { }
