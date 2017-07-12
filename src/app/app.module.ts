import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/* App Root */
import { AppComponent } from './app.component';

/* Routing Module */
import { AppRoutingModule } from './app-routing.module';

/* Feature Modules */
import { HeaderModule } from './components/header/header.module';
import { HomeModule } from './pages/home/home.module';
import { SearchModule } from './pages/search/search.module';
import { ReportModule } from './pages/report/report.module';
import { ProfilesModule } from './pages/profiles/profiles.module';
import { FooterModule } from './components/footer/footer.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    HeaderModule,
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    SearchModule,
    ReportModule,
    ProfilesModule,
    FooterModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
