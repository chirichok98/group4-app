import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { INotificationOption } from '../interfaces/INotificationOption';

@Injectable()
export class NotificationService {

  constructor(private httpService: HttpService) { }

  getUnseenNotifications(pag: any): Promise<INotificationOption[]> {
    const url: string = `api/notification/unseen`;
    return this.httpService.get(url, pag)
      .then(res => res.json());
  }


}
