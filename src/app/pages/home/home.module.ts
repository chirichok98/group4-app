import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 

import { HomeRoutingModule } from './home.state';
import { HomeComponent } from './home.component';
import { SloganModule } from '../../components/slogan/slogan.module';
import { LoginFormModule } from '../../components/login/login.module';
import { DescribeBlockModule } from '../../components/describe-block/describe-block.module';
import { HomeService } from '../../services/home.service';

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    LoginFormModule,
    DescribeBlockModule,
    SloganModule,
  ],
  providers: [HomeService],
})
export class HomeModule { }
