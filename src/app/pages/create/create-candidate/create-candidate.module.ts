import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { CreateCandidateComponent } from './create-candidate.component';
import { CreateCandidateService } from './create-candidate.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    HttpModule,
    FormsModule,
  ],
  exports: [],
  declarations: [CreateCandidateComponent],
  providers: [CreateCandidateService],
})
export class CreateCandidateModule { }
