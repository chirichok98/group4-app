import { NgModule } from '@angular/core';

import { ModalComponent } from './modal.component';
import { MaterialModule } from '@angular/material';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SelectFormModule } from '../select-form/select-form.module';
import { DatepickerFormModule } from '../datepicker-form/datepicker-form.module';
import { DictionariesService } from '../../services/dictionaries.service';
import { CandidateService } from '../../services/candidate.service';
import { SnackbarService } from '../../services/snackbar.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    SelectFormModule,
    DatepickerFormModule,
  ],
  exports: [ModalComponent],
  declarations: [ModalComponent],
  providers: [
    CandidateService,
    DictionariesService,
    SnackbarService,
  ],
})
export class ModalModule { }
