import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { INotificationOption } from '../interfaces/INotificationOption';

@Injectable()
export class NotificationService {

  constructor(private httpService: HttpService) { }

  concatParam(param: string): string {
    return `${this.httpService.NOTIFICATIONS}/${param}`;
  } 

  getAllNotifications(pag: any): Promise<INotificationOption[]> {
    const url: string = this.concatParam('all');
    return this.httpService.get(url, pag)
      .then(res => res.json());
  }

  getUnseenNotifications(pag: any): Promise<INotificationOption[]> {
    const url: string = this.concatParam('unseen');
    return this.httpService.get(url, pag)
      .then(res => res.json());
  }

  updateNotificationsStatuses(ids: number[]): Promise<any> {
    const url: string = this.concatParam(`${this.httpService.UPDATE}/status`);
    return this.httpService.put(url, ids, this.httpService.stringify);
  }
}
