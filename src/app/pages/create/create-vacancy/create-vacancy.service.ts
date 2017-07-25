import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, RequestOptionsArgs, Headers } from '@angular/http';

@Injectable()
export class CreateVacancyService {
  private url = 'http://knowbaseserver.azurewebsites.net/api/vacancy/add';
  private headers = new Headers({ 'Content-Type': 'application/json' });
  private options = new RequestOptions({ headers: this.headers });

  constructor(private http: Http) { }

  addVacancy(vacancy): Promise<any> {
    const body = JSON.stringify(vacancy);
    console.log(body);
    return this.http.post(this.url, body, this.options)
      .toPromise()
      .then(res => res.json());
  }
}
