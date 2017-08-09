import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { MyCookieService } from './cookie.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HttpService {
  BASE_URL = 'http://knowbase.azurewebsites.net';
  DEF_HEADERS: Headers;
  AUTH_HEADERS = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
  token: string;

  TOKEN_URL: string = `token`;
  CAN: string = `api/candidate`;
  CAN_SEARCH: string = `api/candidate/search`;
  VAC: string = `api/vacancy`;
  VAC_SEARCH: string = `api/vacancy/search`;
  ADD: string = `add`;
  UPDATE: string = `update`;
  SEARCH: string = `search`;
  CITY: string = 'api/city';
  ENGLISH: string = 'api/engLevel';
  SKILLS: string = 'api/techSkill';
  VAC_STATUS: string = 'api/vacancyStatus';
  CAN_STATUS: string = 'api/candidateStatus';
  HRS: string = 'api/user/hrms';
  TECH: string = 'api/user/tech';
  INTERVIEW: string = 'api/interview';
  NOTIFICATIONS: string = 'api/notification';

  constructor(private http: Http, private cookie: MyCookieService) {
    this.DEF_HEADERS = new Headers({ 'Content-Type': 'application/json' });
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

  appendAuth(header: any): void {
    header.delete('Authorization');
    if (!header.has('Authorization')) {
      const token: string | null = this.cookie.getToken();
      if (token) {
        header.append('Authorization', `Bearer ${token}`);
      }
    }
  }

  post(url: string, body: any, headers: Headers, cb: any): Promise<any> {
    this.DEF_HEADERS.delete('Authorization');
    if (headers !== this.AUTH_HEADERS && !this.DEF_HEADERS.has('Authorization')) {
      const token: string | null = this.cookie.getToken();
      if (token) {
        this.DEF_HEADERS.append('Authorization', `Bearer ${token}`);
      }
    }
    const urls: string = this.concatUrl(this.BASE_URL, url, false);
    const obj: string = cb(body);
    // console.log(cb(body));
    const options = new RequestOptions({ headers });
    return this.http.post(urls, obj, options)
      .toPromise();
  }

  put(url: string, body: any, cb): Promise<any> {
    this.appendAuth(this.DEF_HEADERS);
    const urls: string = this.concatUrl(this.BASE_URL, url, false);
    const obj: string = cb(body);
    // console.log(this.stringify(body));
    const options = new RequestOptions({ headers: this.DEF_HEADERS });
    return this.http.put(urls, obj, options)
      .toPromise();
  }

  get(url: string, query: any): Promise<any> {
    this.appendAuth(this.DEF_HEADERS);
    let urls: string = this.concatUrl(this.BASE_URL, url, false);
    if (query) {
      urls = this.concatUrl(urls, this.makeQuery(query), true);
    }
    const options = new RequestOptions({ headers: this.DEF_HEADERS });
    return this.http.get(urls, options)
      .toPromise();
  }

  postFile(url: string, formData: FormData): Promise<any> {
    const headers = new Headers();
    this.appendAuth(headers);
    // headers.append('Content-Type', 'multipart/*; boundary=another cool boundary');
    // headers.append('Content-Type', 'boundary:aaaaa');
    const options = new RequestOptions({ headers });
    const urls: string = this.concatUrl(this.BASE_URL, url, false);
    return this.http.post(urls, formData, options)
      .toPromise();
  }

  exportFile(id, path: string): Observable<Object[]> {
    return Observable.create((observer: any) => {
      // const xhr = new XMLHttpRequest();
      // // tslint:disable-next-line:max-line-length
      // xhr.open('GET', this.concatUrl(this.BASE_URL, path, false), true);
      // xhr.setRequestHeader('Content-type', 'application/json');
      // const token: any = this.cookie.getToken();
      // xhr.setRequestHeader('Authorization', `Bearer ${token}`);
      // xhr.responseType = 'blob';

      // xhr.onreadystatechange = function () {
      //   if (xhr.readyState === 4) {
      //     if (xhr.status === 200) {

      //       const contentType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
      //       const blob = new Blob([xhr.response], { type: contentType });
      //       observer.next(blob);
      //       observer.complete();
      //     } else {
      //       observer.error(xhr.response);
      //     }
      //   }
      // };
      // xhr.send();

    });
  }
}
