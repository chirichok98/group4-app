import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { IPositionDetail } from '../../../../interfaces/IPositionDetail';

@Injectable()
export class PositionsListItemService {
  private apiUrl: string = 'http://knowbaseserver.azurewebsites.net/api/vacancy';

  constructor(private http: Http) { }

  getPositionById(id): Promise<IPositionDetail> {
    const url = `${this.apiUrl}/${id}`;
    const candidates: Promise<IPositionDetail> = this.http.get(url)
      .toPromise()
      .then(res => res.json() as IPositionDetail);
    return candidates;
  }
}
