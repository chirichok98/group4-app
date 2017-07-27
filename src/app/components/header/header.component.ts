import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  loggedUser: any;

  constructor(private cookie: CookieService) {
    console.log('get user');
    this.loggedUser = this.cookie.getObject('current');
  }

  ngDoCheck() {
    this.loggedUser = this.cookie.getObject('current');
  }
}
