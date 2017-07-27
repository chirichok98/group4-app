import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CookieModule } from 'ngx-cookie';

import { LoginFormComponent } from './login.component';
import { AuthenticationService } from '../../services/authentication.service';

@NgModule({
  imports: [
    FormsModule,
    CookieModule.forChild(),
  ],
  exports: [LoginFormComponent],
  declarations: [LoginFormComponent],
  providers: [AuthenticationService],
})
export class LoginFormModule { }
