import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import { CookieService } from 'ngx-cookie';

@Injectable()
export class HttpService {
  private BASE_URL = 'http://knowbaseserver.azurewebsites.net';
  DEF_HEADERS: Headers;
  AUTH_HEADERS = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
  token: string;

  TOKEN_URL: string = `token`;
  CAN: string = `api/candidate`;
  VAC: string = `api/vacancy`;
  ADD: string = `add`;
  SEARCH: string = `search`;
  CITY: string = 'api/city';
  ENGLISH: string = 'api/engLevel';
  SKILLS: string = 'api/techSkill';
  VAC_STATUS: string = 'api/vacancyStatus';
  CAN_STATUS: string = 'api/candidateStatus';

  constructor(private http: Http, private cookie: CookieService) {
    console.log('new httpService');
    console.log(this.DEF_HEADERS);
    this.DEF_HEADERS = new Headers({ 'Content-Type': 'application/json' });
    console.log(this.DEF_HEADERS);
  }

  private concatUrl(base: string, param: string, isQuery: boolean): string {
    if (isQuery) {
      return `${base}?${param}`;
    }
    return `${base}/${param}`;
  }

  makeQuery(obj: any): string {
    const query: string = Object.keys(obj).map((k: any) =>
      `${encodeURIComponent(k)}=${encodeURIComponent(obj[k])}`)
      .join('&');
    return query;
  }

  stringify(body: any): string {
    return JSON.stringify(body);
  }

  post(param: string, body: any, headers: Headers, cb: any): Promise<any> {
    this.DEF_HEADERS.delete('Authorization');
    if (headers !== this.AUTH_HEADERS && !this.DEF_HEADERS.has('Authorization')) {
      const cookObj: any = this.cookie.getObject('current');
      let token: string;
      if (cookObj) {
        token = `Bearer ${cookObj.access_token}`;
        console.log(token);
        this.DEF_HEADERS.append('Authorization', token);
      }
    }
    const url: string = this.concatUrl(this.BASE_URL, param, false);
    const obj: string = cb(body);
    const options = new RequestOptions({ headers });
    console.log(obj);
    return this.http.post(url, obj, options)
      .toPromise();
  }

  get(param: string, query: any): Promise<any> {
    this.DEF_HEADERS.delete('Authorization');
    if (!this.DEF_HEADERS.has('Authorization')) {
      const cookObj: any = this.cookie.getObject('current');
      let token: string;
      if (cookObj) {
        token = `Bearer ${cookObj.access_token}`;
        console.log(token);
        this.DEF_HEADERS.append('Authorization', token);
      }
    }
    let url: string = this.concatUrl(this.BASE_URL, param, false);
    if (query) {
      url = this.concatUrl(url, this.makeQuery(query), true);
    }
    const options = new RequestOptions({ headers: this.DEF_HEADERS });
    return this.http.get(url, options)
      .toPromise()
      .then(res => res.json());
  }
}
