import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/* App Root */
import { AppComponent } from './app.component';

/* Routing Module */
import { AppRoutingModule } from './app-routing.module';

/* Feature Modules */
import { HeaderModule } from './components/header/header.module';
import { HomeModule } from './pages/home/home.module';
import { MainPageModule } from './pages/main-page/main-page.module';
import { ReportModule } from './pages/report/report.module';
import { ProfilesModule } from './pages/profiles/profiles.module';
import { FooterModule } from './components/footer/footer.module';
import { CreateCandidateModule } from './pages/create/create-candidate/create-candidate.module';
import { CreateVacancyModule } from './pages/create/create-vacancy/create-vacancy.module';
import { CookieModule } from 'ngx-cookie';


@NgModule({

  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    HomeModule,
    MainPageModule,
    CreateCandidateModule,
    CreateVacancyModule,
    ReportModule,
    ProfilesModule,
    FooterModule,
    CookieModule.forRoot(),
  ],
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
