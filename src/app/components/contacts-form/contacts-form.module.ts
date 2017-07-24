import { NgModule } from '@angular/core';

import { ContactsFormComponent } from './contacts-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [FormsModule],
  exports: [ContactsFormComponent],
  declarations: [ContactsFormComponent],
  providers: [],
})
export class ContactsFormModule { }
