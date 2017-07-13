import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

export interface INavbarOption {
  name: string;
  stateName: string;
}

@Component({
  selector: 'navbar-menu',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  @Input() states: INavbarOption[];
  currentState: INavbarOption;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.currentState = this.states[0];
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
    if (index === 0) {
      return `${classNames} navbar-elem col s4 m4 l4 center`;
    }
    return `${classNames} navbar-elem col s4 m4 l4 center`;
  }
}
