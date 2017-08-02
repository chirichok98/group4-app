import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { CandidatesListComponent } from './candidates-list.component';
// tslint:disable-next-line:max-line-length
import { CandidatePreviewModule } from '../../../../components/candidate-preview-card/candidate-preview-card.module';
import { SpinnerModule } from '../../../../components/spinner/spinner.module';
import { SearchModule } from '../../../../components/search/search.module';
import { PagerModule } from '../../../../directives/pager/pager.module';
import { PagerService } from '../../../../services/pager.service';
import { PagerDirective } from '../../../../directives/pager/pager.directive';
import { TransferService } from '../../../../services/transfer.service';
@NgModule({
  imports: [
    HttpModule,
    RouterModule,
    CandidatePreviewModule,
    CommonModule,
    SpinnerModule,
    MaterialModule,
    PagerModule,
    SearchModule,
  ],
  exports: [RouterModule],
  declarations: [CandidatesListComponent],
  providers: [PagerService],
})
export class CandidatesListModule { }
