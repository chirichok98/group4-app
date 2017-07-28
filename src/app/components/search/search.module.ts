import { NgModule } from '@angular/core';

import { SearchComponent } from './search.component';
import { SearchOptionModule } from '../search-option/search-option.module';
import { CommonModule } from '@angular/common';
// add SearchService

@NgModule({
  imports: [
    CommonModule, 
    SearchOptionModule,
  ],
  declarations: [SearchComponent],
  exports: [SearchComponent],
  providers: [/*SearchService*/],
})

export class SearchModule { }
