import { Injectable } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { IPositionDetail } from '../../../../interfaces/IPositionDetail';

const positions: IPositionDetail[] = [
  /*{
    id: number,
    name: string,
    requestDate: Date,
    startDate: Date,
    status: string,
    link: string,
    primarySkill: IPrimarySkill,
    englishLevel: IEnglishLevel,
    experience: number | null,
    primarySkillLevel: number | null,
    city: ICity,
    vacancyStatus: IVacancyStatus,
    techSkills: ITechSkill[],
    candidates: ICandidatePreview[],
  },*/
];


@Injectable()
export class PositionsListItemService {
  currentPositionId: number;
  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe((params: ParamMap) => {
      this.currentPositionId = +params['id'];
    });
  }

  getPositionById() {
    return Promise.resolve(positions.find(i => i.id === this.currentPositionId));
  }
}
