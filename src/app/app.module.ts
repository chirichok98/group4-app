import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdCheckboxModule, MaterialModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { CookieModule } from 'ngx-cookie';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import 'hammerjs';

/* App Root */
import { AppComponent } from './app.component';

/* Routing Module */
import { AppRoutingModule } from './app-routing.module';

/* Feature Modules */
import { HomeModule } from './pages/home/home.module';
import { MainPageModule } from './pages/main-page/main-page.module';
import { CreateCandidateModule } from './pages/create/create-candidate/create-candidate.module';
import { CreatePositionModule } from './pages/create/create-position/create-position.module';
import { EditCandidateModule } from './pages/edit/edit-candidate/edit-candidate.module';
import { EditPositionModule } from './pages/edit/edit-position/edit-position.module';
import { StoreModule } from './pages/store/store.module';
import { SnackbarService } from './services/snackbar.service';
import { SignalRService } from './services/signalR.service';
import { MyCookieService } from './services/cookie.service';
import { HeaderModule } from './components/header/header.module';
import { FooterModule } from './components/footer/footer.module';

@NgModule({

  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    HeaderModule,
    FooterModule,
    AppRoutingModule,
    HomeModule,
    StoreModule,
    MainPageModule,
    CreateCandidateModule,
    CreatePositionModule,
    EditCandidateModule,
    EditPositionModule,
    CookieModule.forRoot(),
    MdCheckboxModule,
    MdButtonModule,
    CommonModule,
    BrowserModule,
    FormsModule,
    MaterialModule,
  ],
  declarations: [AppComponent],
  providers: [
    MyCookieService,
    SignalRService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
