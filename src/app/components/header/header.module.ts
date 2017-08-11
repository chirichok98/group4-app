import { NgModule } from '@angular/core';
import { CookieModule } from 'ngx-cookie';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header.component';
import { ActionButtonModule } from '../action-button-menu/action-button-menu.module';


@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    ActionButtonModule,
    CookieModule.forChild(),
  ],
  exports: [HeaderComponent],
  providers: [],
})
export class HeaderModule { }
