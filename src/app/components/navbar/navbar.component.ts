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
    this.router.navigate([`../${this.currentState.stateName}`], { relativeTo: this.route });
  }

  getStyleByIndex(index: number): string {
    switch (index) {
      case 0: return 'navbar-elem col s4 m4 l3 offset-l2 xl2 offset-xl3 center';
      default : return 'navbar-elem col s4 m4 l3 xl2 center';
    }
  }
}
