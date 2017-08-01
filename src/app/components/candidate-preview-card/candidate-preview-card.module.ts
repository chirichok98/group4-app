import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CandidatePreviewComponent } from './candidate-preview-card.component';
import { SpinnerModule } from '../spinner/spinner.module';
import { MdCardModule, MaterialModule } from '@angular/material';
import { SnackbarService } from '../../services/snackbar.service';

@NgModule({
  imports: [
    CommonModule,
    SpinnerModule,
    MdCardModule,
    MaterialModule,
  ],
  declarations: [CandidatePreviewComponent],
  exports: [CandidatePreviewComponent],
  providers: [SnackbarService],
})
export class CandidatePreviewModule { }
