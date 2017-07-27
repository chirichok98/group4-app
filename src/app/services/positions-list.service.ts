import { Injectable } from '@angular/core';

import { HttpService } from './http.service';
import { IPositionPreview } from '../interfaces/IPositionPreview';

@Injectable()
export class PositionsListService {
  constructor(private httpService: HttpService) { }

  private makePagParms(skip: number, amount: number) {
    const query: any = { skip, amount };
    return query;
  }

  getPositions(skip: number, amount: number): Promise<IPositionPreview[]> {
    const pagParam: any = this.makePagParms(skip, amount);
    const positions: Promise<IPositionPreview[]> =
      this.httpService.get(this.httpService.VAC_URL, pagParam);
    return positions;
  }
}
