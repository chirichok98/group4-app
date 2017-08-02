import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NavbarComponent } from './navbar.component';
import { SearchModule } from '../search/search.module';
import { MaterialModule } from '@angular/material';
import { CookieModule } from 'ngx-cookie';
import { SortModule } from '../sort/sort.module';

@NgModule({
  imports: [
    CommonModule,
    SearchModule,
    SortModule,
    MaterialModule,
    CookieModule,
  ],
  declarations: [NavbarComponent],
  exports: [NavbarComponent],
})
export class NavbarModule { }
