import { Injectable } from '@angular/core';
import { Headers, RequestOptions, Http, Response } from '@angular/http';
import { IGeneral } from '../../../interfaces/IGeneral';

@Injectable()
export class HelpService {
  private url: string = 'http://knowbaseserver.azurewebsites.net/api';

  private cities: IGeneral[];
  private engLevel: Promise<IGeneral[]>;
  private skills: Promise<IGeneral[]>;

  constructor(private http: Http) { }

  getCities(): IGeneral[] {
    if (this.cities) {
      return this.cities;
    }
    const cityUrl: string = `${this.url}/city`;
    this.http.get(cityUrl)
      .toPromise()
      .then(res => res.json())
      .then((cities: IGeneral[]) => {
        this.cities = cities;
        return this.cities;
      });
  }
}

@Injectable()
export class CreateCandidateService {
  private url = 'http://knowbaseserver.azurewebsites.net/api/candidate/add';
  private headers = new Headers({ 'Content-Type': 'application/json' });
  private options = new RequestOptions({ headers: this.headers });

  constructor(private http: Http) { }

  addCandidate(candidate): Promise<any> {
    const body = JSON.stringify(candidate);
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.url, body, { headers })
      .toPromise()
      .then(res => res.json());
  }
}
