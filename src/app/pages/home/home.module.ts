import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home.state';
import { HomeComponent } from './home.component';
import { LoginFormModule } from '../../components/login/login.module';
import { NavbarModule } from '../../components/navbar/navbar.module';
import { CandidateCardModule } from '../../components/candidate.card/candidate.card.module';
// add HomeService

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    HomeRoutingModule,
    LoginFormModule,
    NavbarModule,
    CandidateCardModule,
  ],
  providers: [/*HomeService*/],
})
export class HomeModule { }
