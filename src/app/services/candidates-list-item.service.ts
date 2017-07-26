import { Injectable } from '@angular/core';

import { ICandidateDetail } from '../interfaces/ICandidateDetail';
import { HttpService } from './http.service';

@Injectable()
export class CandidatesListItemService {
  private GET_CAN_URL: string = 'candidate';
  constructor(private httpService: HttpService) { }

  concatId(id: number): string {
    return `${this.GET_CAN_URL}/${id}`;
  }

  getCandidateById(id: number): Promise<ICandidateDetail> {
    const url: string = this.concatId(id);
    const candidate: Promise<ICandidateDetail> = this.httpService.sendGetRequest(url);
    return candidate;
  }
}
