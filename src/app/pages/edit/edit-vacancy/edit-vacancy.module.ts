import { NgModule } from '@angular/core';

import { EditVacancyComponent } from './edit-position.component';
import { SpinnerModule } from '../../../components/spinner/spinner.module';
import { InputVacancyModule } from '../../../components/input-position/input-position.module';
import { CommonModule } from '@angular/common';
import { PositionService } from '../../../services/position.service';

@NgModule({
  imports: [
    SpinnerModule,
    InputVacancyModule,
    CommonModule,
  ],
  exports: [],
  declarations: [EditVacancyComponent],
  providers: [PositionService],
})
export class EditVacancyModule { }
