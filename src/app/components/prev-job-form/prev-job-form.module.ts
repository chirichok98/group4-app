import { NgModule } from '@angular/core';

import { PrevJobFormComponent } from './prev-job-form.component';
import { ContactsFormModule } from '../contacts-form/contacts-form.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    ContactsFormModule,
    FormsModule,
  ],
  exports: [PrevJobFormComponent],
  declarations: [PrevJobFormComponent],
  providers: [],
})
export class PrevJobFormModule { }
