import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NavbarComponent } from './navbar.component';
import { SearchModule } from '../search/search.module';
import { FilterModule } from '../filter/filter.module';

@NgModule({
  imports: [
    CommonModule,
    SearchModule,
    FilterModule,
  ],
  declarations: [NavbarComponent],
  exports: [NavbarComponent],
})
export class NavbarModule { }
