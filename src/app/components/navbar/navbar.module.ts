import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NavbarComponent } from './navbar.component';
import { SearchModule } from '../search/search.module';
import { FilterModule } from '../filter/filter.module';
import { MaterialModule } from '@angular/material';
import { CookieModule } from 'ngx-cookie';

@NgModule({
  imports: [
    CommonModule,
    SearchModule,
    FilterModule,
    MaterialModule,
    CookieModule,
  ],
  declarations: [NavbarComponent],
  exports: [NavbarComponent],
})
export class NavbarModule { }
