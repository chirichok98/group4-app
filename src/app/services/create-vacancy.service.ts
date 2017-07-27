import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, RequestOptionsArgs, Headers } from '@angular/http';
import { HttpService } from './http.service';

@Injectable()
export class CreateVacancyService {
  private url = `${this.httpService.VAC_URL}/${this.httpService.ADD}`;

  constructor(private http: Http, private httpService: HttpService) { }

  addVacancy(vacancy: any): Promise<any> {
    return this.httpService.post(this.url, vacancy);
  }
}
