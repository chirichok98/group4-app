import { NgModule } from '@angular/core';

import { PrevJobFormComponent } from './prev-job-form.component';
import { ContactsFormModule } from '../contacts-form/contacts-form.module';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';

@NgModule({
  imports: [
    ContactsFormModule,
    FormsModule,
    MaterialModule,
  ],
  exports: [PrevJobFormComponent],
  declarations: [PrevJobFormComponent],
  providers: [],
})
export class PrevJobFormModule { }
