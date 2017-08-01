import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { IPositionPreview } from '../interfaces/IPositionPreview';

@Injectable()
export class PositionService {

  constructor(private httpService: HttpService) { }
  
  getPositionsByIds(ids: number[]): Promise<IPositionPreview[]> {
    const url: string = `${this.httpService.VAC}/byids`;
    const positions: Promise<IPositionPreview[]> =
      this.httpService.post(url, 
        ids, 
        this.httpService.DEF_HEADERS, 
        this.httpService.stringify)
        .then(res => res.json());
    return positions;
  }
}
