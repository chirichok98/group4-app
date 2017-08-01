import { Component, Input, OnInit, DoCheck } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

declare const $;

import { INavbarOption } from '../../interfaces/INavbarOption';
import { MyCookieService } from '../../services/cookie.service';

@Component({
  selector: 'navbar-menu',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit, DoCheck {
  @Input() states: INavbarOption[];
  currentState: INavbarOption;
  isSearchVisible: boolean = false;
  isFilterVisible: boolean = false;
  isMenuVisible: boolean = false;

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
    const state: INavbarOption = this.states.find(item => item.stateName === stateName);
    return state;
  }

  goTo(newState: INavbarOption): void {
    this.currentState = newState;
    const url: string = `main-page/${this.currentState.stateName}`;
    this.cookie.updateUrl(url);
    this.router.navigate([url]);
  }

  getStyleByIndex(index: number): string {
    let classNames: string = '';
    switch (index) {
      case 0: classNames = 'candidates';
        break;
      case 1: classNames = 'positions';
        break;
      case 2: classNames = 'news';
        break;
    }
    if (this.currentState === this.states[index]) {
      classNames += ' active';
    }
    return `${classNames} navbar-elem`;
  }

  openSearch(): void {
    this.isSearchVisible = !this.isSearchVisible;
    // const search = $('.search-block');
    // if (!search.height()) {
    //   search.animate({ height: '5rem', opacity: '1' });
    //   search.css({ visibility: 'visible' });
    // } else {
    //   search.animate({ height: '0', opacity: '0' });
    //   search.css({ visibility: 'hidden' });
    // }
  }
}


/* showSearchForm(): void {
    this.toggleMenuForm(false);
    this.toggleFilterForm(false);
    if (this.isSearchVisible) {
      return this.toggleSearchForm(false);
    }
    this.toggleSearchForm(true);
  }

  showMenuForm(): void {
    this.toggleFilterForm(false);
    this.toggleSearchForm(false);
    if (this.isMenuVisible) {
      return this.toggleMenuForm(false);
    }
    this.toggleMenuForm(true);
  }

  showFilterForm(): void {
    this.toggleSearchForm(false);
    this.toggleMenuForm(false);
    if (this.isFilterVisible) {
      return this.toggleFilterForm(false);
    }
    this.toggleFilterForm(true);
  }
  toggleFilterForm(value): void {
    this.isFilterVisible = value;
  }

  toggleSearchForm(value): void {
    this.isSearchVisible = value;
  }

  toggleMenuForm(value): void {
    this.isMenuVisible = value;
  }
} */
