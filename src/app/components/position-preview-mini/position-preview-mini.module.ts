import { NgModule } from '@angular/core';

import { PositionPreviewCardMiniComponent } from './position-preview-mini.component';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { SnackbarService } from '../../services/snackbar.service';

@NgModule({
  declarations: [PositionPreviewCardMiniComponent],
  exports: [PositionPreviewCardMiniComponent],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  providers: [SnackbarService],
})
export class PositionPreviewCardMiniModule { }
