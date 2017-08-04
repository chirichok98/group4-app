import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CandidatePreviewCardMiniComponent } from './candidate-preview-mini.component';
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
  declarations: [CandidatePreviewCardMiniComponent],
  exports: [CandidatePreviewCardMiniComponent],
  providers: [SnackbarService],
})
export class CandidatePreviewCardMiniModule { }
