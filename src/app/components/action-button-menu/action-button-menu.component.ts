import { Component, OnInit, Input } from '@angular/core';
import { IUserPreview } from '../../interfaces/IUserPreview';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie';

@Component({
  selector: 'action-button-menu',
  templateUrl: 'action-button-menu.component.html',
  styleUrls: ['action-button-menu.component.scss'],
})

export class ActionButtonComponent implements OnInit {
  @Input() user: IUserPreview;

  constructor(private router: Router, private cookie: CookieService) { }

  ngOnInit() { }

  openPage(url): void {
    this.router.navigate([url]);
  }

  logout(): void {
    this.cookie.remove('current');
    this.router.navigate(['home']);
  }
}
