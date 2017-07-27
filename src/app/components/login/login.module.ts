import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { LoginFormComponent } from './login.component';

@NgModule({
  declarations: [LoginFormComponent],
  imports: [FormsModule],
  exports: [LoginFormComponent],
})
export class LoginFormModule { }
