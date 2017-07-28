import { Component, DoCheck } from '@angular/core';
import { CookieService } from 'ngx-cookie';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements DoCheck {
  loggedUser: any;

  constructor(private router: Router, private cookie: CookieService) {
    this.loggedUser = this.cookie.getObject('current');
  }

  openPage(url): void {
    if (this.loggedUser) {
      this.loggedUser.url = url;
      this.cookie.putObject('current', this.loggedUser);
    }
    this.router.navigate([url]);
  }

  ngDoCheck() {
    this.loggedUser = this.cookie.getObject('current');
  }
}
