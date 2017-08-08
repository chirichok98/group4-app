import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable()
export class InterviewService {

  constructor(private httpService: HttpService) { }

  concatParam(param: any): string {
    return `${this.httpService.INTERVIEW}/${param}`;
  }

  assignInterview(obj: any, type: string): Promise<any> {
    const url: string = this.concatParam(`${type}/${this.httpService.ADD}`);
    return this.httpService.put(url, obj, this.httpService.stringify);
  }

  sendInterviewFeedback(obj: any, type: string): Promise<any> {
    const url: string = this.concatParam(`${type}/${this.httpService.UPDATE}/feedback`);
    return this.httpService.put(url, obj, this.httpService.stringify);
  }

  sendEmail(obj: any): Promise<any> {
    const url: string = `api/mail/send`;
    return this.httpService.post(url,
      obj,
      this.httpService.DEF_HEADERS,
      this.httpService.stringify);
  }

  setCalendarEvent(obj: any): Promise<any> {
    const url: string = `api/calendar`;
    return this.httpService.post(url,
      obj,
      this.httpService.DEF_HEADERS,
      this.httpService.stringify);
  }
}
