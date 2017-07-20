import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

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

  showSearchForm(): void {
    if (this.isFilterVisible) {
      this.closeSearchForm();
    }
    this.isSearchVisible = !this.isSearchVisible;
  }

  closeSearchForm(): void {
    this.isFilterVisible = !this.isFilterVisible;
  }

  showFilterForm(): void {
    if (this.isSearchVisible) {
      this.closeFilterForm();
    }
    this.isFilterVisible = !this.isFilterVisible;
  }

  closeFilterForm(): void {
    this.isSearchVisible = !this.isSearchVisible;
  }

}
