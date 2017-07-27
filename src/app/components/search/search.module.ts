import { NgModule } from '@angular/core';

import { SearchComponent } from './search.component';
import { SearchOptionModule } from '../search-option/search-option.module';
// add SearchService

@NgModule({
  declarations: [SearchComponent],
  exports: [SearchComponent],
  imports: [SearchOptionModule],
  providers: [/*SearchService*/],
})

export class SearchModule { }
