import { Component, DoCheck } from '@angular/core';
import { CookieService } from 'ngx-cookie';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements DoCheck {
  loggedUser: any;

  constructor(private cookie: CookieService) {
    this.loggedUser = this.cookie.getObject('current');
  }

  ngDoCheck() {
    this.loggedUser = this.cookie.getObject('current');
  }
}
