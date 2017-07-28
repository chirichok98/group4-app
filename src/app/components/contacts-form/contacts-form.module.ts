import { NgModule } from '@angular/core';

import { ContactsFormComponent } from './contacts-form.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';

@NgModule({
  imports: [
    FormsModule,
    MaterialModule,
  ],
  exports: [ContactsFormComponent],
  declarations: [ContactsFormComponent],
  providers: [],
})
export class ContactsFormModule { }
