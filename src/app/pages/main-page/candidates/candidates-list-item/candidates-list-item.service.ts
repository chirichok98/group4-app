import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { ICandidateDetail } from '../../../../interfaces/ICandidateDetail';

@Injectable()
export class CandidatesListItemService {
  private apiUrl: string = 'http://knowbaseserver.azurewebsites.net/api/candidate';

  constructor(private http: Http) { }

  getCandidateById(id): Promise<ICandidateDetail> {
    const url = `${this.apiUrl}/${id}`;
    const candidates: Promise<ICandidateDetail> = this.http.get(url)
      .toPromise()
      .then(res => res.json() as ICandidateDetail);
    return candidates;
  }
}
