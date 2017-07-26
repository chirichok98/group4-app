import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { IGeneral } from '../interfaces/IGeneral';
import { ITechSkill } from '../interfaces/ITechSkill';
import { HttpService } from './http.service';

@Injectable()
export class DictionariesService {
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
    this.cities = this.httpService.sendGetRequest(this.httpService.CITY, null);
    return this.cities;
  }

  getEnglishLevel(): Promise<IGeneral[]> {
    if (this.engLevel) {
      return this.engLevel;
    }
    this.engLevel = this.httpService.sendGetRequest(this.httpService.ENGLISH, null);
    return this.engLevel;
  }

  getSkills(): Promise<ITechSkill[]> {
    if (this.skills) {
      return this.skills;
    }
    this.skills = this.httpService.sendGetRequest(this.httpService.SKILLS, null);
    return this.skills;
  }

  getVacancyStatuses(): Promise<IGeneral[]> {
    if (this.vacStatuses) {
      return this.vacStatuses;
    }
    this.vacStatuses = this.httpService.sendGetRequest(this.httpService.VAC_STATUS, null);
    return this.vacStatuses;
  }

  getCandidateStatuses(): Promise<IGeneral[]> {
    if (this.canStatuses) {
      return this.canStatuses;
    }
    this.canStatuses = this.httpService.sendGetRequest(this.httpService.CAN_STATUS, null);
    return this.canStatuses;
  }
}
