import { NgModule } from '@angular/core';
import { BreadCrumbsComponent } from './bread-crumbs.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule],
  exports: [BreadCrumbsComponent],
  declarations: [BreadCrumbsComponent],
  providers: [],
})
export class BreadCrumbsModule { }
