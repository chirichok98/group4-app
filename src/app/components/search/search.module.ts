import { NgModule } from '@angular/core';

import { SearchComponent} from './search.component';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { SelectFormModule } from '../select-form/select-form.module';
import { SkillFormModule } from '../skill-form/skill-form.module';
import { FormsModule } from '@angular/forms';
import { DatepickerFormModule } from '../datepicker-form/datepicker-form.module';
import { TransferService } from '../../services/transfer.service';

@NgModule({
  imports: [
    CommonModule, 
    FormsModule,
    MaterialModule,
    SelectFormModule,
    SkillFormModule,
    DatepickerFormModule,
  ],
  declarations: [SearchComponent],
  exports: [SearchComponent],
  providers: [TransferService],
})
export class SearchModule { }
