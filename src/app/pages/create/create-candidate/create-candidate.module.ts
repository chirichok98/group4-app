import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { CreateCandidateComponent } from './create-candidate.component';
import { CreateCandidateService } from './create-candidate.service';
import { FormsModule } from '@angular/forms';
// tslint:disable-next-line:max-line-length
import { PrevJobinputFormModule } from '../../../components/prev-job-input-form/prev-job-input-form.module';

@NgModule({
  imports: [
    HttpModule,
    FormsModule,
    PrevJobinputFormModule,
  ],
  exports: [],
  declarations: [CreateCandidateComponent],
  providers: [CreateCandidateService],
})
export class CreateCandidateModule { }
