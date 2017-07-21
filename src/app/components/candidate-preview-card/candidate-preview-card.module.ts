import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CandidatePreviewComponent } from './candidate-preview-card.component';
import { SpinnerModule } from '../spinner/spinner.module';

@NgModule({
  imports: [
    CommonModule,
    SpinnerModule,
  ],
  declarations: [CandidatePreviewComponent],
  exports: [CandidatePreviewComponent],
  providers: [],
})
export class CandidatePreviewModule { }
