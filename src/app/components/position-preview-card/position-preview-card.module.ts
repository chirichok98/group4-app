import { NgModule } from '@angular/core';

import { PositionPreviewComponent } from './position-preview-card.component';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { SnackbarService } from '../../services/snackbar.service';

@NgModule({
  declarations: [PositionPreviewComponent],
  exports: [PositionPreviewComponent],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  providers: [SnackbarService],
})
export class PositionPreviewModule { }
