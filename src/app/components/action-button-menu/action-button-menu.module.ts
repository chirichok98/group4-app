import { NgModule } from '@angular/core';

import { ActionButtonComponent } from './action-button-menu.component';
import { CommonModule } from '@angular/common';
import { CookieModule } from 'ngx-cookie';
import { MaterialModule } from '@angular/material';

@NgModule({
  imports: [
    MaterialModule,
    CommonModule,
    CookieModule.forChild(),
  ],
  exports: [ActionButtonComponent],
  declarations: [ActionButtonComponent],
  providers: [],
})
export class ActionButtonModule { }
