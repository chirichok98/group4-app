import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { IGeneral } from '../../interfaces/IGeneral';
import { ITechSkill } from '../../interfaces/ITechSkill';

@Injectable()
export class HelpService {
  private url: string = 'http://knowbaseserver.azurewebsites.net/api';

  private cities: Promise<IGeneral[]>;
  private engLevel: Promise<IGeneral[]>;
  private skills: Promise<ITechSkill[]>;
  private vacancyStatuses: Promise<IGeneral[]>;

  constructor(private http: Http) { }

  getCities(): Promise<IGeneral[]> {
    if (this.cities) {
      return this.cities;
    }
    const cityUrl: string = `${this.url}/city`;
    this.cities = this.sendRequest(cityUrl);
    return this.cities;
  }

  getEnglishLevel(): Promise<IGeneral[]> {
    if (this.engLevel) {
      return this.engLevel;
    }
    const engUrl: string = `${this.url}/engLevel`;
    this.engLevel = this.sendRequest(engUrl);
    return this.engLevel;
  }

  getSkills(): Promise<ITechSkill[]> {
    if (this.skills) {
      return this.skills;
    }
    const skillUrl: string = `${this.url}/TechSkill`;
    this.skills = this.sendRequest(skillUrl);
    return this.skills;
  }

  getVacancyStatuses(): Promise<IGeneral[]> {
    if (this.vacancyStatuses) {
      return this.vacancyStatuses;
    }
    const statusesUrl: string = `${this.url}/vacancyStatus`;
    this.vacancyStatuses = this.sendRequest(statusesUrl);
    return this.vacancyStatuses;
  }
  
  sendRequest(url): Promise<any> {
    return this.http.get(url)
      .toPromise()
      .then(res => res.json());
  }
}
