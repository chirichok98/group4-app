import { NgModule } from '@angular/core';

import { MainPageComponent } from './main-page.component';
import { MainPageRoutingModule } from './main-page.state';
import { NavbarModule } from '../../components/navbar/navbar.module';

@NgModule({
  imports: [
    NavbarModule,
  ],
  exports: [],
  declarations: [MainPageComponent],
  providers: [],
})
export class MainPageModule { }
