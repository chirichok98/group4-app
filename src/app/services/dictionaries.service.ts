import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { IGeneral } from '../interfaces/IGeneral';
import { ITechSkill } from '../interfaces/ITechSkill';
import { HttpService } from './http.service';
import { IUserPreview } from '../interfaces/IUserPreview';

@Injectable()
export class DictionariesService {
  private cities: Promise<IGeneral[]>;
  private engLevel: Promise<IGeneral[]>;
  private skills: Promise<ITechSkill[]>;
  private vacStatuses: Promise<IGeneral[]>;
  private canStatuses: Promise<IGeneral[]>;
  private hrs: Promise<IUserPreview[]>;
  private techs: Promise<IUserPreview[]>;

  constructor(private http: Http, private httpService: HttpService) { }

  getCities(): Promise<IGeneral[]> {
    if (this.cities) {
      return this.cities;
    }
    this.cities = this.httpService.get(this.httpService.CITY, null)
      .then(res => res.json());
    return this.cities;
  }

  getEnglishLevel(): Promise<IGeneral[]> {
    if (this.engLevel) {
      return this.engLevel;
    }
    this.engLevel = this.httpService.get(this.httpService.ENGLISH, null)
      .then(res => res.json());
    return this.engLevel;
  }

  getSkills(): Promise<ITechSkill[]> {
    if (this.skills) {
      return this.skills;
    }
    this.skills = this.httpService.get(this.httpService.SKILLS, null)
      .then(res => res.json());
    return this.skills;
  }

  getVacancyStatuses(): Promise<IGeneral[]> {
    if (this.vacStatuses) {
      return this.vacStatuses;
    }
    this.vacStatuses = this.httpService.get(this.httpService.VAC_STATUS, null)
      .then(res => res.json());
    return this.vacStatuses;
  }

  getCandidateStatuses(): Promise<IGeneral[]> {
    if (this.canStatuses) {
      return this.canStatuses;
    }
    this.canStatuses = this.httpService.get(this.httpService.CAN_STATUS, null)
      .then(res => res.json());
    return this.canStatuses;
  }

  getHRs(): Promise<IUserPreview[]> {
    if (this.hrs) {
      return this.hrs;
    }
    this.hrs = this.httpService.get(this.httpService.HRS, null)
      .then(res => res.json());
    return this.hrs;
  }

  getTechs(): Promise<IUserPreview[]> {
    if (this.techs) {
      return this.techs;
    }
    this.techs = this.httpService.get(this.httpService.TECH, null)
      .then(res => res.json());
    return this.techs;
  }
}
