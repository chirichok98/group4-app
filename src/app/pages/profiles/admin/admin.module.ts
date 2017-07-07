import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin.state';

@NgModule({
  declarations: [
    AdminComponent,
  ],
  imports: [
    RouterModule,
    AdminRoutingModule,
  ],
  providers: [],
})
export class AdminModule { }