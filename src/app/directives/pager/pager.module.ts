import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
// tslint:disable-next-line:max-line-length
import { CandidatesListModule } from './../../pages/main-page/candidates/candidates-list/candidates-list.module';
import { PositionsListModule } from './../../pages/main-page/open-positions/positions-list/positions-list.module';
import { PagerDirective } from './pager.directive';

@NgModule({
  imports: [],
  exports: [PagerDirective],
  declarations: [PagerDirective],
  providers: [],
})
export class PagerModule { }
