import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable()
export class AuthenticationService {
  constructor(private httpService: HttpService) { }

  authenticate(login: string, password: string): Promise<any> {
    const body: any = {
      password,
      username: login,
      grant_type: 'password',
    };
    return this.httpService.post(this.httpService.TOKEN_URL,
      body,
      this.httpService.AUTH_HEADERS,
      this.httpService.makeQuery);
  }
}
