import { NgModule } from '@angular/core';

import { SearchRoutingModule } from './search.state';
import { SearchComponent } from './search.component';
// add SearchService

@NgModule({
  declarations: [
    SearchComponent,
  ],
  imports: [
    SearchRoutingModule,
  ],
  providers: [/*SearchService*/],
})

export class SearchModule { }
