import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { INotificationOption } from '../interfaces/INotificationOption';

@Injectable()
export class NotificationService {

  constructor(private httpService: HttpService) { }

  getNotifications(pag: any): Promise<INotificationOption[]> {
    const url: string = `api/notification`;
    return this.httpService.get(url, pag);
  }

  getNot(): Promise<any> {
    return this.httpService.get('api/notification/piska', null);
  }
}
