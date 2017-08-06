import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { INotificationOption } from '../interfaces/INotificationOption';

@Injectable()
export class NotificationService {

  constructor(private httpService: HttpService) { }

  getNotifications(pag: any): Promise<INotificationOption[]> {
    const url: string = `api/notification/all`;
    return this.httpService.get(url, pag)
      .then(res => res.json());
  }
}
