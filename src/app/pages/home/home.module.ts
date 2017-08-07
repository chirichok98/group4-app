import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 

import { HomeRoutingModule } from './home.state';
import { HomeComponent } from './home.component';
import { SloganModule } from '../../components/slogan/slogan.module';
import { LoginFormModule } from '../../components/login/login.module';
import { SpinnerModule } from '../../components/spinner/spinner.module';
@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    LoginFormModule,
    SloganModule,
  ],
  declarations: [
    HomeComponent,
  ],
  providers: [],
})
export class HomeModule { }
