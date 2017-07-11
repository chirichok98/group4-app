import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ReportComponent } from './report.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'report',
        component: ReportComponent,
      },
    ])],
  exports: [
    RouterModule,
  ],
})
export class ReportRoutingModule { }