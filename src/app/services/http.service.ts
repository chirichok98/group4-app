import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class HttpService {
  private BASE_URL = 'http://knowbaseserver.azurewebsites.net/api';
  private headers = new Headers({ 'Content-Type': 'application/json' });
  private OPTIONS = new RequestOptions({ headers: this.headers });
  CAN_URL: string = `candidate`;
  VAC_URL: string = `vacancy`;
  ADD: string = `add`;
  SEARCH: string = `search`;
  CITY: string = 'city';
  ENGLISH: string = 'engLevel';
  SKILLS: string = 'techSkill';
  VAC_STATUS: string = 'vacancyStatus';
  CAN_STATUS: string = 'candidateStatus';


  constructor(private http: Http) { }

  private concatUrl(base: string, param: string, isQuery: boolean): string {
    if (isQuery) {
      return `${base}?${param}`;
    }
    return `${base}/${param}`;
  }

  private makeQuery(obj: any): string {
    const query: string = Object.keys(obj).map((k: any) =>
      `${encodeURIComponent(k)}=${encodeURIComponent(obj[k])}`)
      .join('&');
    return query;
  }

  private stringify(body: any): string {
    return JSON.stringify(body);
  }

  sendPostRequest(param: string, body: any): Promise<any> {
    const url: string = this.concatUrl(this.BASE_URL, param, false);
    const obj: string = this.stringify(body);
    console.log(obj);
    return this.http.post(url, obj, this.OPTIONS)
      .toPromise();
  }

  sendGetRequest(param: string, query: any): Promise<any> {
    let url: string = this.concatUrl(this.BASE_URL, param, false);
    if (query) {
      url = this.concatUrl(url, this.makeQuery(query), true);
    }
    return this.http.get(url)
      .toPromise()
      .then(res => res.json());
  }
}
