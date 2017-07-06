import  { NgModule } from '@angular/core';

import { ReportComponent } from './report.component';
import { ReportRoutingModule } from './report.state';

@NgModule({
  declarations: [
    ReportComponent,
    ],
  imports: [
    ReportRoutingModule,
    ],
  providers:[],
})
export class ReportModule { }