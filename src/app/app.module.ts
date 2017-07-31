import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdCheckboxModule, MaterialModule } from '@angular/material';
import { NgModule } from '@angular/core';
import 'hammerjs';

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
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MyCookieService } from './services/cookie.service';
import { EditCandidateModule } from './pages/edit/edit-candidate/edit-candidate.module';


@NgModule({

  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    HomeModule,
    MainPageModule,
    CreateCandidateModule,
    CreateVacancyModule,
    EditCandidateModule,
    ReportModule,
    ProfilesModule,
    FooterModule,
    CookieModule.forRoot(),
    MdCheckboxModule,
    MdButtonModule,
    CommonModule,
    BrowserModule,
    FormsModule,
    MaterialModule,
  ],
  declarations: [AppComponent],
  providers: [MyCookieService],
  bootstrap: [AppComponent],
})
export class AppModule { }
