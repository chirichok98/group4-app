import { NgModule } from '@angular/core';

import { TableSortingExample } from './table-sorting-example.component';
import { MaterialModule, MdNativeDateModule } from '@angular/material';
import { CdkTableModule } from '@angular/cdk';
@NgModule({
    imports: [
        MaterialModule,
        MdNativeDateModule,
        CdkTableModule,
    ],
    exports: [TableSortingExample],
    declarations: [TableSortingExample],
    providers: [],
})
export class TableSortingExampleModule { }