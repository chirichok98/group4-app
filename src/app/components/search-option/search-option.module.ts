import { NgModule } from '@angular/core';

import { SearchOptionComponent } from './search-option.component';
import { SelectFormComponent } from '../select-form/select-form.component';
import { SelectFormModule } from '../select-form/select-form.module';

@NgModule({
    imports: [
        SelectFormModule,
    ],
    exports: [SearchOptionComponent],
    declarations: [SearchOptionComponent],
    providers: [],
})
export class SearchOptionModule { }
