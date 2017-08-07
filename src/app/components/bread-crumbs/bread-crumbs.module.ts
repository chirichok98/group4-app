import { NgModule } from '@angular/core';
import { BreadCrumbsComponent } from './bread-crumbs.component';
import { CommonModule } from '@angular/common';
import { CookieModule } from 'ngx-cookie';
@NgModule({
  imports: [CommonModule, CookieModule],
  exports: [BreadCrumbsComponent],
  declarations: [BreadCrumbsComponent],
  providers: [],
})
export class BreadCrumbsModule { }
