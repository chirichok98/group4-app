import { NgModule } from '@angular/core';

import { NotificationsComponent } from './notifications.component';
import { CommonModule } from '@angular/common';
import { MaterialModule, MdNativeDateModule, MdTableModule } from '@angular/material';
import { CdkTableModule } from '@angular/cdk';

@NgModule({
  imports: [ CommonModule,
    MaterialModule,
    MdNativeDateModule,
    MdTableModule,
    CdkTableModule,],
  exports: [],
  declarations: [NotificationsComponent],
  providers: [],
})
export class NotificationsModule { }
