import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CookieModule } from 'ngx-cookie';

import { LoginFormComponent } from './login.component';
import { AuthenticationService } from '../../services/authentication.service';
import { MaterialModule } from '@angular/material';
import { SnackbarService } from '../../services/snackbar.service';
import { SignalRService } from '../../services/signalR.service';

@NgModule({
  imports: [
    FormsModule,
    CookieModule.forChild(),
    MaterialModule,
  ],
  exports: [LoginFormComponent],
  declarations: [LoginFormComponent],
  providers: [
    AuthenticationService,
    SnackbarService,
    SignalRService,
  ],
})
export class LoginFormModule { }
