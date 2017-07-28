import { Injectable } from '@angular/core';

import { HttpService } from './http.service';
import { ICandidatePreview } from '../interfaces/ICandidatePreview';

@Injectable()
export class CandidatesListService {
  constructor(private httpService: HttpService) { }

  private makePagParms(skip: number, amount: number) {
    const query: any = { skip, amount };
    return query;
  }

  getCandidates(skip: number, amount: number): Promise<ICandidatePreview[]> {
    const pagParam: any = this.makePagParms(skip, amount);
    const candidates: Promise<ICandidatePreview[]> = 
      this.httpService.get(this.httpService.CAN, pagParam);
    return candidates;
  }
}
