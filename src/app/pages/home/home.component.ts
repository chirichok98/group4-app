import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  loginTitle: string = 'Sign in';

  constructor(private router: Router) {
  }

  onLogin(): void {
    this.router.navigate(['/profiles']);
  }



}
