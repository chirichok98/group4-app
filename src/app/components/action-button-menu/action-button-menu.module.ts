import { NgModule } from '@angular/core';

import { ActionButtonComponent } from './action-button-menu.component';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [CommonModule],
    exports: [ActionButtonComponent],
    declarations: [ActionButtonComponent],
    providers: [],
})
export class ActionButtonModule { }
