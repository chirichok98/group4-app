import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CreateCandidateComponent } from './create-candidate.component';
import { CreateCandidateService } from './create-candidate.service';
import { FormsModule } from '@angular/forms';
import { ContactsFormModule } from '../../../components/contacts-form/contacts-form.module';
import { PrevJobFormModule } from '../../../components/prev-job-form/prev-job-form.module';
import { CommonModule } from '@angular/common';
import { SelectFormModule } from '../../../components/select-form/select-form.module';
import { DatepickerFormModule } from '../../../components/datepicker-form/datepicker-form.module';
import { HelpService } from '../help.service';
import { RangeFormModule } from '../../../components/range-form/range-form.module';

@NgModule({
  imports: [
    HttpModule,
    FormsModule,
    ContactsFormModule,
    PrevJobFormModule,
    SelectFormModule,
    DatepickerFormModule,
    CommonModule,
    RangeFormModule,
  ],
  exports: [],
  declarations: [CreateCandidateComponent],
  providers: [
    CreateCandidateService,
    HelpService,
  ],
})
export class CreateCandidateModule { }
