import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { ICandidatePreview } from '../interfaces/ICandidatePreview';
import { ICandidateDetail } from '../interfaces/ICandidateDetail';
import { IPositionPreview } from '../interfaces/IPositionPreview';

@Injectable()
export class CandidateService {

  constructor(private httpService: HttpService) { }

  concatParam(param: any): string {
    return `${this.httpService.CAN}/${param}`;
  }

  getCandidateById(id: number): Promise<ICandidateDetail> {
    const url: string = this.concatParam(id);
    const candidate: Promise<ICandidateDetail> =
      this.httpService.get(url, null)
        .then(res => res.json());
    return candidate;
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

  assignPositions(can: number[], vac: number[]): Promise<any> {
    const url: string = this.concatParam(`${this.httpService.UPDATE}/vacancies/add`);
    const res: Promise<any> = this.httpService.put(
      url,
      {
        candidates: can,
        positions: vac,
      },
      this.httpService.stringify);
    return res;
  }

  updateCandidate(obj: any): Promise<any> {
    const url: string = this.concatParam(this.httpService.UPDATE);
    return this.httpService.put(url, obj, this.httpService.stringify);
  }

  removePosition(obj: any): Promise<any> {
    const url: string = this.concatParam(`${this.httpService.UPDATE}/vacancies/delete`);
    return this.httpService.get(url, obj);
  }

  addCandidate(candidate): Promise<any> {
    const url: string = this.concatParam(this.httpService.ADD);
    return this.httpService.post(url,
      candidate,
      this.httpService.DEF_HEADERS,
      this.httpService.stringify);
  }

  autoSearch(obj: any): Promise<IPositionPreview[]> {
    const url: string = `api/vacancy/autosearch`;
    return this.httpService.post(url,
      obj,
      this.httpService.DEF_HEADERS,
      this.httpService.stringify)
      .then(res => res.json());
  }

  attachInterview(id: number, file: File): Promise<any> {
    const formData: FormData = new FormData();
    formData.append('uploadFile', file, file.name);
    const url = `api/file/candidate/resume/add/${id}`;
    return this.httpService.postFile(url, formData);
  }

  downloadCV(id: number): Promise<any> {
    const url: string = `api/file/candidate/resume/get/${id}`;
    return this.httpService.get(url, null);
  }

  getInterviewFedbacks(id: number, type: string): Promise<any> {
    const url: string = `api/interview/${type}/bycandidate/${id}`;
    return this.httpService.get(url, null)
      .then(res => res.json());
  }
}
