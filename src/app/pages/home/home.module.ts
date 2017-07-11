import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home.state';
import { HomeComponent } from './home.component';
import { LoginFormModule } from '../../components/login/login.module';
import { NavbarModule } from '../../components/navbar/navbar.module';
// add HomeService

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    HomeRoutingModule,
    LoginFormModule,
    NavbarModule,
  ],
  providers: [/*HomeService*/],
})
export class HomeModule { }
