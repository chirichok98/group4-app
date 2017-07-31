import { Component, DoCheck } from '@angular/core';
import { Router } from '@angular/router';
import { MyCookieService } from '../../services/cookie.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements DoCheck {
  loggedUser: any;

  constructor(private router: Router, private cookie: MyCookieService) {
    this.loggedUser = this.cookie.getCookie();
  }

  openPage(url): void {
    if (this.loggedUser) {
      this.cookie.updateUrl(url);
    }
    this.router.navigate([url]);
  }

  ngDoCheck() {
    this.loggedUser = this.cookie.getCookie();
  }
}
