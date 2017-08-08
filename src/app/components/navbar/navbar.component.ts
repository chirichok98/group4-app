import { Component, Input, OnInit, DoCheck } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

declare const $;

import { INavbarOption } from '../../interfaces/INavbarOption';
import { MyCookieService } from '../../services/cookie.service';
import { SignalRService } from '../../services/signalR.service';

@Component({
  selector: 'navbar-menu',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit, DoCheck {
  @Input() states: INavbarOption[];
  currentState: INavbarOption;
  isSearchVisible: boolean = false;
  isSortVisible: boolean = false;

  isCandidate: boolean;
  isPosition: boolean;
  isNotifications: boolean;

  notificationAmount: number;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private cookie: MyCookieService) { }

  ngOnInit(): void {
    const url: any = this.cookie.getUrl();
    if (url === 'main-page') {
      this.currentState = this.states[0];
      const url: string = `main-page/${this.currentState.stateName}`;
      this.cookie.updateUrl(url);
      this.router.navigate([url]);
      return;
    }
    this.currentState = this.getStateFromUrl(url);
    this.router.navigate([url]);
  }

  ngDoCheck() {
    this.notificationAmount = this.cookie.getUnreadAmount();
    if (this.cookie.getUrl() === 'main-page') {
      this.currentState = this.states[0];

      const url: string = `main-page/${this.currentState.stateName}`;
      this.cookie.updateUrl(url);
      this.router.navigate([url]);
      return;
    }
    const url: string = this.router.url.slice(1);
    const state: INavbarOption = this.getStateFromUrl(url);
    this.cookie.updateUrl(url);
    this.currentState = state;
  }

  getStateFromUrl(url: string): INavbarOption {
    const start: number = url.indexOf('/');
    const end: number = url.lastIndexOf('/');
    let stateName: string;
    if (start === end) {
      stateName = url.slice(start + 1);
    } else {
      stateName = url.slice(start + 1, end);
    }
    if (stateName === 'candidates')
      this.setWindowOwner(true, false);
    if (stateName === 'positions')
      this.setWindowOwner(false, true);
    if (stateName === 'notifications')
      this.isNotifications = true;
    const state: INavbarOption = this.states.find(item => item.stateName === stateName);
    return state;
  }

  setWindowOwner(can: boolean, vac: boolean) {
    this.isCandidate = can;
    this.isPosition = vac;
    this.isNotifications = false;
  }

  goTo(newState: INavbarOption): void {
    this.currentState = newState;
    const url: string = `main-page/${this.currentState.stateName}`;
    this.cookie.updateUrl(url);
    this.router.navigate([url]);
  }

  getStyleByIndex(name: string): string {
    let classNames: string = '';
    switch (name) {
      case 'candidates': classNames = 'candidates';
        break;
      case 'positions': classNames = 'positions';
        break;
      case 'notifications': classNames = 'notifications';
        break;
      case 'news': classNames = 'news';
        break;
    }
    if (this.currentState === this.states.find(i => i.name === name)) {
      classNames += ' active';
    }
    return `${classNames} navbar-elem`;
  }

  openSearch(): void {
    this.toggleSortForm(false);
    if (this.isSearchVisible) {
      return this.toggleSearchForm(false);
    }
    this.toggleSearchForm(true);
  }

  openSort(): void {
    this.toggleSearchForm(false);
    if (this.isSortVisible) {
      return this.toggleSortForm(false);
    }
    this.toggleSortForm(true);
  }

  toggleSortForm(value): void {
    this.isSortVisible = value;
  }

  toggleSearchForm(value): void {
    this.isSearchVisible = value;
  }
} 
