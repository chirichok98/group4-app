import { Injectable } from '@angular/core';
import { Headers, RequestOptions, Http, Response } from '@angular/http';

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
