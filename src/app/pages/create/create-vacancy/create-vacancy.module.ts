import { NgModule } from '@angular/core';

import { CreateVacancyComponent } from './create-vacancy.component';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    HttpModule,
    FormsModule,
  ],
  exports: [],
  declarations: [CreateVacancyComponent],
  providers: [],
})
export class CreateVacancyModule { }
