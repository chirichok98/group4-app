import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 

import { HomeRoutingModule } from './home.state';
import { HomeComponent } from './home.component';
import { LoginFormModule } from '../../components/login/login.module';
import { NavbarModule } from '../../components/navbar/navbar.module';
import { OpportunityModule } from '../../components/opportunity/opportunity.module';
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
    NavbarModule,
    OpportunityModule,
    CandidateCardModule,
  ],
  providers: [/*HomeService*/],
})
export class HomeModule { }
