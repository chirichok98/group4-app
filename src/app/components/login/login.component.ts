import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'login-form',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginFormComponent {
  constructor(private router: Router) { }

  signIn(): void {
    this.router.navigate([`main-page`]);
  }
}
