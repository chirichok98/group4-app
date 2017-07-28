import { Injectable } from '@angular/core';

import { HttpService } from './http.service';

@Injectable()
export class CreateCandidateService {
  private url = `${this.httpService.CAN}/${this.httpService.ADD}`;
  constructor(private httpService: HttpService) { }

  addCandidate(candidate): Promise<any> {
    return this.httpService.post(this.url, 
      candidate,
      this.httpService.DEF_HEADERS, 
      this.httpService.stringify);
  }
}
