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
      title: 'What KnowBase Is?', content: `KnowBase is a multi-component software tool designed to automate and facilitate the processes involved in finding, attracting, assessing, interviewing and hiring new personnel.`,
      imageUrl: './assets/opportunities/2.png',
    },
    {
      title: 'Main Features Include', content: `A user-friendly interface Data warehousing Applicant and job tracking Report generation software`,
      imageUrl: `./assets/opportunities/1.png`,
    },
  ];
  
  constructor(private router: Router) {
  }

  onLogin(): void {
    this.router.navigate(['/profiles']);
  }
}
