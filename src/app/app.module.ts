import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


/* App Root */
import { AppComponent } from './app.component';

/* Routing Module */
import { AppRoutingModule } from './app-routing.module';

/* Feature Modules */
import { HomeModule } from './pages/home/home.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
