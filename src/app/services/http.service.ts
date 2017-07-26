import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';

@Injectable()
export class HttpService {
  private BASE_URL = 'http://knowbaseserver.azurewebsites.net/api';
  private headers = new Headers({ 'Content-Type': 'application/json' });
  private OPTIONS = new RequestOptions({ headers: this.headers });

  constructor(private http: Http) { }

  private concatUrl(param: string): string {
    return `${this.BASE_URL}/${param}`;
  }

  private stringify(body: any): string {
    return JSON.stringify(body);
  }

  sendPostRequest(param: string, body: any): Promise<any> {
    const url: string = this.concatUrl(param);
    const obj: string = this.stringify(body);
    return this.http.post(url, obj, this.OPTIONS)
      .toPromise();
  }

  sendGetRequest(param: string): Promise<any> {
    const url: string = this.concatUrl(param);
    return this.http.get(url)
      .toPromise()
      .then(res => res.json());
  }
}
