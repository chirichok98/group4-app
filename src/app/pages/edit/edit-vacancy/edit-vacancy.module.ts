import { NgModule } from '@angular/core';

import { EditVacancyComponent } from './edit-vacancy.component';
import { EditVacancyService } from '../../../services/edit-vacancy.service';
import { SpinnerModule } from '../../../components/spinner/spinner.module';
import { InputVacancyModule } from '../../../components/input-vacancy/input-vacancy.module';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    SpinnerModule,
    InputVacancyModule,
    CommonModule,
  ],
  exports: [],
  declarations: [EditVacancyComponent],
  providers: [EditVacancyService],
})
export class EditVacancyModule { }
