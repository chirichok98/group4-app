import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { IPositionPreview } from '../interfaces/IPositionPreview';
import { IPositionDetail } from '../interfaces/IPositionDetail';

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
      this.httpService.get(url, null);
    return position;
  }

  updatePosition(obj: any): Promise<any> {
    const url: string = this.concatParam(this.httpService.UPDATE);
    return this.httpService.put(url, obj, this.httpService.stringify);
  }

  addVacancy(vacancy: any): Promise<any> {
    const url = this.concatParam(this.httpService.ADD);
    return this.httpService.post(url, 
      vacancy,
      this.httpService.DEF_HEADERS, 
      this.httpService.stringify);
  }
}
