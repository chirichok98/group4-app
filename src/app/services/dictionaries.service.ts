import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { IGeneral } from '../interfaces/IGeneral';
import { ITechSkill } from '../interfaces/ITechSkill';
import { HttpService } from './http.service';

@Injectable()
export class DictionariesService {
  private CITY_URL: string = 'city';
  private ENG_URL: string = 'engLevel';
  private SKILL_URL: string = 'techSkill';
  private VAC_STATUS_URL: string = 'vacancyStatus';
  private CAN_STATUS_URL: string = 'candidateStatus';

  private cities: Promise<IGeneral[]>;
  private engLevel: Promise<IGeneral[]>;
  private skills: Promise<ITechSkill[]>;
  private vacStatuses: Promise<IGeneral[]>;
  private canStatuses: Promise<IGeneral[]>;

  constructor(private http: Http, private httpService: HttpService) { }

  getCities(): Promise<IGeneral[]> {
    if (this.cities) {
      return this.cities;
    }
    this.cities = this.httpService.sendGetRequest(this.CITY_URL);
    return this.cities;
  }

  getEnglishLevel(): Promise<IGeneral[]> {
    if (this.engLevel) {
      return this.engLevel;
    }
    this.engLevel = this.httpService.sendGetRequest(this.ENG_URL);
    return this.engLevel;
  }

  getSkills(): Promise<ITechSkill[]> {
    if (this.skills) {
      return this.skills;
    }
    this.skills = this.httpService.sendGetRequest(this.SKILL_URL);
    return this.skills;
  }

  getVacancyStatuses(): Promise<IGeneral[]> {
    if (this.vacStatuses) {
      return this.vacStatuses;
    }
    this.vacStatuses = this.httpService.sendGetRequest(this.VAC_STATUS_URL);
    return this.vacStatuses;
  }

  getCandidateStatuses(): Promise<IGeneral[]> {
    if (this.canStatuses) {
      return this.canStatuses;
    }
    this.canStatuses = this.httpService.sendGetRequest(this.CAN_STATUS_URL);
    return this.canStatuses;
  }
}
