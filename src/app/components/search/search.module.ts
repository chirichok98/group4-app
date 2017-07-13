import { NgModule } from '@angular/core';

import { SearchComponent } from './search.component';
// add SearchService

@NgModule({
  declarations: [SearchComponent],
  exports: [SearchComponent],
  imports: [],
  providers: [/*SearchService*/],
})

export class SearchModule { }
