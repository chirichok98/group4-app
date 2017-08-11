import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { BreadCrumbsModule } from '../../../../components/bread-crumbs/bread-crumbs.module';
import { PositionsListComponent } from './positions-list.component';
// tslint:disable-next-line:max-line-length
import { PositionPreviewModule } from '../../../../components/position-preview-card/position-preview-card.module';
import { SpinnerModule } from '../../../../components/spinner/spinner.module';
import { PagerModule } from '../../../../directives/pager/pager.module';
import { PagerService } from '../../../../services/pager.service';

import { PagerDirective } from '../../../../directives/pager/pager.directive';

@NgModule({
  imports: [
    HttpModule,
    RouterModule,
    PositionPreviewModule,
    CommonModule,
    SpinnerModule,
    MaterialModule,
    PagerModule,
    BreadCrumbsModule,
  ],
  exports: [
    RouterModule,
    PagerModule,
  ],
  declarations: [PositionsListComponent],
  providers: [PagerService],
})
export class PositionsListModule { }
