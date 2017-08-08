import { NgModule } from '@angular/core';

import { EditPositionComponent } from './edit-position.component';
import { SpinnerModule } from '../../../components/spinner/spinner.module';
import { InputPositionModule } from '../../../components/input-position/input-position.module';
import { CommonModule } from '@angular/common';
import { PositionService } from '../../../services/position.service';

@NgModule({
  imports: [
    SpinnerModule,
    InputPositionModule,
    CommonModule,
  ],
  exports: [],
  declarations: [EditPositionComponent],
  providers: [PositionService],
})
export class EditPositionModule { }
