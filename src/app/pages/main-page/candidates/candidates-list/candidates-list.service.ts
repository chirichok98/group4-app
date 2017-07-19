import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { ICandidatePreview } from '../../../../interfaces/ICandidatePreview';

@Injectable()
export class CandidatesListService {
  private apiUrl: string = 'http://knowbaseserver.azurewebsites.net/api/candidate';

  constructor(private http: Http) { }

  getAllCandidates(): Promise<ICandidatePreview[]> {
    return this.http.get(this.apiUrl)
      .toPromise()
      .then(res => res.json() as ICandidatePreview[]);
  }
}
