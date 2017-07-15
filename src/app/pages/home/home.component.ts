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
      title: 'Сontemporary', content: `Only modern and high-quality technologies have been used for development, which simplifies the work with the system in the near future.`,
      imageUrl: './assets/opportunities/buildings8.png',
    },
    {
      title: 'Minimalistic', content: `Popular, comfortable and familiar design.`,
      imageUrl: `./assets/opportunities/minimalistic3.png`,
    },
    {
      title: 'Secure', content: `We were able to provide a sufficient level of security. So, the company's employees may not worry.`,
      imageUrl: `./assets/opportunities/lock4.png`,
    },
    {
      title: 'Powerfull', content: `Our system stay fast even during heavy loads.`,
      imageUrl: `./assets/opportunities/fast.png`,
    },      
  ];
  
  constructor(private router: Router) {
  }

  onLogin(): void {
    this.router.navigate(['/profiles']);
  }
}
