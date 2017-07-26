import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, RequestOptionsArgs, Headers } from '@angular/http';
import { HttpService } from './http.service';

@Injectable()
export class CreateVacancyService {
  private ADD_VAC_URL: string = 'vacancy/add';

  constructor(private http: Http, private httpService: HttpService) { }

  addVacancy(vacancy: any): Promise<any> {
    return this.httpService.sendPostRequest(this.ADD_VAC_URL, vacancy);
  }
}
