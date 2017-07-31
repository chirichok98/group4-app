import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { IPositionDetail } from '../interfaces/IPositionDetail';

@Injectable()
export class EditVacancyService {

  constructor(private httpService: HttpService) { }

  concatId(param: any): string {
    return `${this.httpService.VAC}/${param}`;
  }

  getVacancyById(id: number): Promise<IPositionDetail> {
    const url: string = this.concatId(id);
    const position: Promise<IPositionDetail> = 
      this.httpService.get(url, null);
    return position;
  }

  updateVacancy(obj: any): Promise<any> {
    const url: string = this.concatId(this.httpService.UPDATE);
    return this.httpService.put(url, obj, this.httpService.stringify);
  }
}
