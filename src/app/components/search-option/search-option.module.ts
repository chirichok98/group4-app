import { NgModule } from '@angular/core';

import { SearchOptionComponent } from './search-option.component';
import { SelectFormComponent } from '../select-form/select-form.component';
import { SelectFormModule } from '../select-form/select-form.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    FormsModule,
    SelectFormModule,
  ],
  exports: [SearchOptionComponent],
  declarations: [SearchOptionComponent],
  providers: [],
})
export class SearchOptionModule { }
