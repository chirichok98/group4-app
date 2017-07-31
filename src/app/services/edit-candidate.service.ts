import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { ICandidateDetail } from '../interfaces/ICandidateDetail';

@Injectable()
export class EditCandidateService {

  constructor(private httpService: HttpService) { }

  concatId(param: any): string {
    return `${this.httpService.CAN}/${param}`;
  }

  getCandidateById(id: number): Promise<ICandidateDetail> {
    const url: string = this.concatId(id);
    const candidate: Promise<ICandidateDetail> = 
      this.httpService.get(url, null);
    return candidate;
  }

  updateCandidate(obj: any): Promise<any> {
    const url: string = this.concatId(this.httpService.UPDATE);
    return this.httpService.put(url, obj, this.httpService.stringify);
  }
}
