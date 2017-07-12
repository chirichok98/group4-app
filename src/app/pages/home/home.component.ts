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
    dsfljvhbfd shvbdlvhj dbvjbfljdh
    dbhf vbdhfsvbf hbdfhjvdbv dvh
    abfvhbdfs hbhjbv dhjdbv dhjbdf`,
      imageUrl: 'https://www.w3schools.com/css/trolltunga.jpg',
    },
    {
      title: 'sjd cljs hvbfjh bdvhja', content: `saldhgvy usgsdgysafd
    sau yfdgvyu agdvyagshdb
     hrfjdsg iufergyewg uyeruyv er greyg urey iuh eqr
     ery gery uerg uyervgffdbhjdf
      erygv xuv uerygedf`,
      imageUrl: `https://i.ytimg.com/vi/qh7LLydY8eo/maxresdefault.jpg`,
    },
  ];
  
  constructor(private router: Router) {
  }

  onLogin(): void {
    this.router.navigate(['/profiles']);
  }



}
