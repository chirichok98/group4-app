import { NgModule } from '@angular/core';

import { SortComponent } from './sort.component';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { TransferService } from '../../services/transfer.service';
@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [SortComponent],
  declarations: [SortComponent],
  providers: [TransferService],
})
export class SortModule { }
