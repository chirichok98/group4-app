import { Injectable } from '@angular/core';
import { Headers, RequestOptions, Http } from '@angular/http';
import { IGeneral } from '../../../interfaces/IGeneral';

@Injectable()
export class CreateCandidateService {
  private url = 'http://knowbaseserver.azurewebsites.net/api/candidate/add';
  private headers = new Headers({ 'Content-Type': 'application/json' });
  private options = new RequestOptions({ headers: this.headers });

  constructor(private http: Http) { }

  addCandidate(candidate): Promise<any> {
    const body = JSON.stringify(candidate);
    console.log(body);
    return this.http.post(this.url, body, this.options)
      .toPromise();
  }
}
