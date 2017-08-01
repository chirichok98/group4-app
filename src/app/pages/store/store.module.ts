import { NgModule } from '@angular/core';

import { StoreComponent } from './store.component';
import { BasketModule } from '../../components/basket/basket.module';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { BasketComponent } from '../../components/basket/basket.component';

@NgModule({
  imports: [
    BasketModule,
    CommonModule,
    MaterialModule,
  ],
  exports: [],
  declarations: [StoreComponent],
  providers: [],
})
export class StoreModule { }
