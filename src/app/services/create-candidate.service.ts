import { Injectable } from '@angular/core';

import { HttpService } from './http.service';

@Injectable()
export class CreateCandidateService {
  private url = `${this.httpService.CAN_URL}/${this.httpService.ADD}`;
  constructor(private httpService: HttpService) { }

  addCandidate(candidate): Promise<any> {
    return this.httpService.sendPostRequest(this.url, candidate);
  }
}
