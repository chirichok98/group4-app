import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { HRComponent } from './hr.component';
import { HRRoutingModule } from './hr.state';

@NgModule({
  declarations: [
    HRComponent,
  ],
  imports: [
    RouterModule,
    HRRoutingModule,
  ],
  providers: [],
})
export class HRModule { }