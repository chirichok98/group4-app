import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

declare const $;

import { INavbarOption } from '../../interfaces/INavbarOption';

@Component({
  selector: 'navbar-menu',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  @Input() states: INavbarOption[];
  currentState: INavbarOption;
  isSearchVisible: boolean = false;
  isFilterVisible: boolean = false;
  isMenuVisible: boolean = false;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const url: string = this.router.url.substring(1);
    const start: number = url.indexOf('/');
    const end: number = url.lastIndexOf('/');
    let stateName: string;
    if (start === end) {
      stateName = url.substring(start + 1);
    } else {
      stateName = url.substring(start + 1, end);
    }
    const state = this.states.find(item => item.stateName === stateName);
    this.currentState = state;
  }

  goTo(newState: INavbarOption): void {
    this.currentState = newState;
    this.router.navigate([`./main-page/${this.currentState.stateName}`]);
  }

  getStyleByIndex(index: number): string {
    let classNames: string = '';
    if (this.currentState === this.states[index]) {
      classNames = 'active';
    }
    return `${classNames} navbar-elem`;
  }

  openSearch(): void {
    const filter = $('.filter-block');
    const search = $('.search-block');
    const detailed = $('.detailed-search');
    if (!filter.height()) {
      if (!search.height()) {
        if (!detailed.height()) {
          search.animate({ height: '16rem', opacity: '1' });
        } else {
          search.animate({ height: '24rem', opacity: '1' });
        }
        search.css({ visibility: 'visible' });

      } else {
        search.animate({ height: '0', opacity: '0' });
        search.css({ visibility: 'hidden' });
      }
    }
  }

  openFilter(): void {
    const filter = $('.filter-block');
    const search = $('.search-block');
    if (!search.height()) {
      if (!filter.height()) {
        filter.animate({ height: '20rem', opacity: '1' });
        filter.css({ visibility: 'visible' });
      } else {
        filter.animate({ height: '0', opacity: '0' });
        filter.css({ visibility: 'hidden' });
      }
    }
  }
  openMenu(): void {
    
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
