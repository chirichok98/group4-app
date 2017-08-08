import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { IPositionPreview } from '../interfaces/IPositionPreview';
import { IPositionDetail } from '../interfaces/IPositionDetail';
import { ICandidatePreview } from '../interfaces/ICandidatePreview';

@Injectable()
export class PositionService {

  constructor(private httpService: HttpService) { }

  concatParam(param: any): string {
    return `${this.httpService.VAC}/${param}`;
  }

  getPositionsByIds(ids: number[]): Promise<IPositionPreview[]> {
    const url: string = this.concatParam(`byids`);
    const positions: Promise<IPositionPreview[]> =
      this.httpService.post(url, 
        ids, 
        this.httpService.DEF_HEADERS, 
        this.httpService.stringify)
        .then(res => res.json());
    return positions;
  }

  getPositionById(id: number): Promise<IPositionDetail> {
    const url: string = this.concatParam(id);
    const position: Promise<IPositionDetail> = 
      this.httpService.get(url, null)
      .then(res => res.json());
    return position;
  }

  assignCandidates(pos: number[], can: number[]): Promise<any> {
    const url: string = this.concatParam(`${this.httpService.UPDATE}/candidates/add`);
    const res: Promise<any> = this.httpService.put(
      url,
      {
        candidates: can,
        positions: pos,
      },
      this.httpService.stringify);
    return res;
  } 

  updatePosition(obj: any): Promise<any> {
    const url: string = this.concatParam(this.httpService.UPDATE);
    return this.httpService.put(url, obj, this.httpService.stringify);
  }

  removeCandidate(obj: any): Promise<any> {
    const url: string = this.concatParam(`${this.httpService.UPDATE}/candidates/delete`);
    return this.httpService.get(url, obj);
  }

  addPosition(position: any): Promise<any> {
    const url = this.concatParam(this.httpService.ADD);
    return this.httpService.post(url, 
      position,
      this.httpService.DEF_HEADERS, 
      this.httpService.stringify);
  }

  autoSearch(obj: any): Promise<ICandidatePreview[]> {
    const url: string = 'api/candidate/autosearch';
    return this.httpService.post(url,
      obj,
      this.httpService.DEF_HEADERS, 
      this.httpService.stringify)
      .then(res => res.json());
  }
}
