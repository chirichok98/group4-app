import { Injectable } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { IPositionDetail } from '../../../../interfaces/IPositionDetail';

const positions: IPositionDetail[] = [
  {
    id: 1,
    projectName: 'Gutmann Inc',
    vacancyName: 'string',
    requestDate: new Date(2017),
    startDate: new Date(2018),
    status: 'string',
    link: 'string',
    primarySkill: {
      id: 3,
      name: 'string',
      skillUrl: 'strin',
    },
    englishLevel: {
      id: 3,
      name: 'B2',
    },
    experience: 5,
    primarySkillLevel: 1,
    city: {
      id: 3,
      name: 'Minsk',
    },
    vacancyStatus: {
      id: 3,
      name: 'string',
    },
    techSkills: [],
    candidates: [],
  },
  {
    id: 2,
    projectName: 'stringAuer - Bernhard',
    vacancyName: 'string',
    requestDate: new Date(2017),
    startDate: new Date(2018),
    status: 'string',
    link: 'string',
    primarySkill: {
      id: 2,
      name: 'string',
      skillUrl: 'strin',
    },
    englishLevel: {
      id: 3,
      name: 'b1',
    },
    experience: 5,
    primarySkillLevel: 1,
    city: {
      id: 3,
      name: 'Vitebsk',
    },
    vacancyStatus: {
      id: 3,
      name: 'string',
    },
    techSkills: [],
    candidates: [],
  },
];


@Injectable()
export class PositionsListItemService {
  constructor() { }

  getPositionById(id): Promise<IPositionDetail> {
    const position = positions.find(i => i.id === id);
    return Promise.resolve(position);
  }
  getPositionByIdSlowly(id): Promise<IPositionDetail> {
    return new Promise((res: any) => setTimeout(() => res(this.getPositionById(id)), 1000));
  }
}
