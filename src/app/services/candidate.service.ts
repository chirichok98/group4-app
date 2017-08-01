import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { ICandidatePreview } from '../interfaces/ICandidatePreview';

@Injectable()
export class CandidateService {

  constructor(private httpService: HttpService) { }
  
  getCandidatesByIds(ids: number[]): Promise<ICandidatePreview[]> {
    const url: string = `${this.httpService.CAN}/byids`;
    const candidates: Promise<ICandidatePreview[]> =
      this.httpService.post(url, 
        ids, 
        this.httpService.DEF_HEADERS, 
        this.httpService.stringify)
        .then(res => res.json());
    return candidates;
  }
}
