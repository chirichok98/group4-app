import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CandidatePreviewComponent } from './candidate-preview-card.component';

@NgModule({
  imports: [CommonModule],
  declarations: [CandidatePreviewComponent],
  exports: [CandidatePreviewComponent],
  providers: [],
})
export class CandidatePreviewModule { }
