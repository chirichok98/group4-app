import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CandidatePreviewComponent } from './candidate-preview-card.component';
import { SpinnerModule } from '../spinner/spinner.module';
import { MdCardModule, MaterialModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    SpinnerModule,
    MdCardModule,
    MaterialModule,
  ],
  declarations: [CandidatePreviewComponent],
  exports: [CandidatePreviewComponent],
  providers: [],
})
export class CandidatePreviewModule { }
