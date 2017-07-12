import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { INavbarOption } from '../../components/navbar/navbar.component';
import { IOpportunity } from '../../components/opportunity/opportunity.component';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  loginTitle: string = 'Sign in';
  routerConfig: INavbarOption[] = [
    { name: 'CANDIDATES', stateName: 'candidates' },
    { name: 'OPEN POSITIONS', stateName: 'vacancies' },
    { name: 'NOTIFICATIONS', stateName: 'notifications' },
  ];
  opportunities: IOpportunity[] = [
    {
      title: 'sidfvhf divbldsfh', content: `jldsh bldfhv
    dsfljvhbfd shvbdlvhj dbvjbfljdh`,
      imageUrl: './assets/opportunities/2.png',
    },
    {
      title: 'sjd cljs hvbfjh', content: `saldhgvy usgsdgysafd
    sau yfdgvyu agdvyagshdb
     hrfjdsg iufergyewg`,
      imageUrl: `./assets/opportunities/1.png`,
    },
  ];
  
  constructor(private router: Router) {
  }

  onLogin(): void {
    this.router.navigate(['/profiles']);
  }



}
