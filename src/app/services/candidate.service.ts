import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { ICandidatePreview } from '../interfaces/ICandidatePreview';
import { ICandidateDetail } from '../interfaces/ICandidateDetail';

@Injectable()
export class CandidateService {

  constructor(private httpService: HttpService) { }

  concatParam(param: any): string {
    return `${this.httpService.CAN}/${param}`;
  }

  getCandidatesByIds(ids: number[]): Promise<ICandidatePreview[]> {
    const url: string = this.concatParam(`byids`);
    const candidates: Promise<ICandidatePreview[]> =
      this.httpService.post(url,
        ids,
        this.httpService.DEF_HEADERS,
        this.httpService.stringify)
        .then(res => res.json());
    return candidates;
  }

  assignVacancies(can: number[], vac: number[]): Promise<any> {
    const url: string = this.concatParam(`${this.httpService.UPDATE}/vacancies`);
    const res: Promise<any> = this.httpService.put(
      url,
      {
        candidates: can,
        vacancies: vac,
      },
      this.httpService.stringify);
    return res;
  }

  getCandidateById(id: number): Promise<ICandidateDetail> {
    const url: string = this.concatParam(id);
    const candidate: Promise<ICandidateDetail> =
      this.httpService.get(url, null);
    return candidate;
  }

  updateCandidate(obj: any): Promise<any> {
    const url: string = this.concatParam(this.httpService.UPDATE);
    return this.httpService.put(url, obj, this.httpService.stringify);
  }

  addCandidate(candidate): Promise<any> {
    const url: string = this.concatParam(this.httpService.ADD);
    return this.httpService.post(url,
      candidate,
      this.httpService.DEF_HEADERS,
      this.httpService.stringify);
  }

  addInterview(type: string, interview: any) {
    const url: string = `${this.httpService.INTERVIEW}/${type}/${this.httpService.ADD}`;
    console.log(this.httpService.stringify(interview));
    return this.httpService.post(url,
      interview,
      this.httpService.DEF_HEADERS,
      this.httpService.stringify);
  }
}
