import { Injectable } from '@angular/core';

import { ICandidateDetail } from '../interfaces/ICandidateDetail';
import { HttpService } from './http.service';

@Injectable()
export class CandidatesListItemService {
  constructor(private httpService: HttpService) { }

  concatId(id: number): string {
    return `${this.httpService.CAN_URL}/${id}`;
  }

  getCandidateById(id: number): Promise<ICandidateDetail> {
    const url: string = this.concatId(id);
    const candidate: Promise<ICandidateDetail> = 
      this.httpService.get(url, null);
    return candidate;
  }
}
