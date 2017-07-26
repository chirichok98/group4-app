import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

import { IPositionDetail } from '../interfaces/IPositionDetail';

@Injectable()
export class PositionsListItemService {
  constructor(private httpService: HttpService) { }

  concatId(id: number): string {
    return `${this.httpService.VAC_URL}/${id}`;
  }

  getPositionById(id: number): Promise<IPositionDetail> {
    const url: string = this.concatId(id);
    const position: Promise<IPositionDetail> = 
      this.httpService.sendGetRequest(url, null);
    return position;
  }
}
