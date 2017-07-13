import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { IDescribeBlock } from '../../components/describe-block/describe-block.component';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  loginTitle: string = 'Sign in';
  
  descriptions: IDescribeBlock[] = [
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
