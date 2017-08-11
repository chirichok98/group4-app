import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NavbarComponent } from './navbar.component';
import { SearchModule } from '../search/search.module';
import { MaterialModule } from '@angular/material';
import { CookieModule } from 'ngx-cookie';
import { SortModule } from '../sort/sort.module';
import { SignalRService } from '../../services/signalR.service';

@NgModule({
  imports: [
    CommonModule,
    SearchModule,
    SortModule,
    MaterialModule,
    CookieModule,
  ],
  exports: [NavbarComponent],
  declarations: [NavbarComponent],
  providers: [SignalRService],
})
export class NavbarModule { }
