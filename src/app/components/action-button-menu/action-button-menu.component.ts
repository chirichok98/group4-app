import { Component, OnInit, Input } from '@angular/core';
import { IUserPreview } from '../../interfaces/IUserPreview';
import { Router } from '@angular/router';
import { MyCookieService } from '../../services/cookie.service';
import { SignalRService } from '../../services/signalR.service';
declare const $;

@Component({
  selector: 'action-button-menu',
  templateUrl: 'action-button-menu.component.html',
  styleUrls: ['action-button-menu.component.scss'],
})

export class ActionButtonComponent implements OnInit {
  @Input() user: IUserPreview;

  constructor(private router: Router, 
              private cookie: MyCookieService,
              private sR: SignalRService) { }

  ngOnInit() {
  }

  openPage(url): void {
    this.cookie.updateUrl(url);
    this.router.navigate([url]);
  }

  logout(): void {
    this.sR.initSignalR(this.sR, true);
    this.cookie.removeCookie();
    this.router.navigate(['home']);
  }
}
