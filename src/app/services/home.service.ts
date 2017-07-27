import { Injectable } from '@angular/core';

import { IDescribeBlock } from '../interfaces/IDescribeBlock';

const DESCRIPTIONS: IDescribeBlock[] = [
  {
    title: 'Contemporary',
    content: `Only modern and high-quality technologies have been used for development, 
        which simplifies the work with the system in the near future.`,
    imageUrl: './assets/opportunities/buildings8.png',
  },
  {
    title: 'Minimalistic',
    content: `Popular, comfortable and familiar design.`,
    imageUrl: `./assets/opportunities/minimalistic3.png`,
  },
  {
    title: 'Secure',
    content: `We were able to provide a sufficient level of 
        security. So, the company's employees may not worry.`,
    imageUrl: `./assets/opportunities/lock4.png`,
  },
  {
    title: 'Powerfull',
    content: `Our system stay fast even during heavy loads.`,
    imageUrl: `./assets/opportunities/fast.png`,
  },
];

@Injectable()
export class HomeService {
  constructor() { }

  getAllDescriptions(): Promise<IDescribeBlock[]> {
    return Promise.resolve(DESCRIPTIONS);
  }
}
