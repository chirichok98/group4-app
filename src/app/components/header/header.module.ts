import { NgModule } from '@angular/core';

import { HeaderComponent } from './header.component';
import { ActionButtonModule } from '../action-button-menu/action-button-menu.module';

@NgModule({
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
  providers: [],
  imports: [ActionButtonModule],
})
export class HeaderModule { }
