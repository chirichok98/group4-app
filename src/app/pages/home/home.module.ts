import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 

import { HomeRoutingModule } from './home.state';
import { HomeComponent } from './home.component';
import { LoginFormModule } from '../../components/login/login.module';
import { DescribeBlockModule } from '../../components/describe-block/describe-block.module';
import { CandidateCardModule } from '../../components/candidate.card/candidate.card.module';
// add HomeService

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    LoginFormModule,
    DescribeBlockModule,
    CandidateCardModule,
  ],
  providers: [/*HomeService*/],
})
export class HomeModule { }
