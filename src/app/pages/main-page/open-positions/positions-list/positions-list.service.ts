import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { IPositionPreview } from '../../../../interfaces/IPositionPreview';

@Injectable()
export class PositionsListService {
  private apiUrl: string = 'http://knowbaseserver.azurewebsites.net/api/vacancy?skip=0&amount=500';

  constructor(private http: Http) { }


  getAllPositions(): Promise<IPositionPreview[]> {
    const positions: Promise<IPositionPreview[]> = this.http.get(this.apiUrl)
      .toPromise()
      .then(res => res.json() as IPositionPreview[]);
    return positions;
  }
}
