import { NgModule } from '@angular/core';

import { PositionPreviewComponent } from './position-preview-card.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [PositionPreviewComponent],
  exports: [PositionPreviewComponent],
  imports: [CommonModule],
  providers: [],
})
export class PositionPreviewModule { }
