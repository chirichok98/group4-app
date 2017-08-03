import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable()
export class InterviewService {

  constructor(private httpService: HttpService) { }

  concatParam(param: any): string {
    return `${this.httpService.INTERVIEW}/${param}`;
  }

  addInterview(obj: any, type: string): Promise<any> {
    const url: string = this.concatParam(`${type}/${this.httpService.ADD}`);
    return this.httpService.put(url, obj, this.httpService.stringify);
  }

}
