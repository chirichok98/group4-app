import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { INotificationOption } from '../interfaces/INotificationOption';

@Injectable()
export class NotificationService {

  constructor(private httpService: HttpService) { }

  concatParam(param: string): string {
    return `${this.httpService.NOTIFICATIONS}/${param}`;
  }

  makePagParams(skip: number, amount: number): any {
    return { skip, amount };
  }

  getAllNotifications(skip: number, amount: number): Promise<INotificationOption[]> {
    const url: string = this.concatParam('all');
    return this.httpService.get(url, this.makePagParams(skip, amount))
      .then(res => res.json());
  }

  getUnseenNotifications(skip: number, amount: number): Promise<INotificationOption[]> {
    const url: string = this.concatParam('unseen');
    return this.httpService.get(url, this.makePagParams(skip, amount))
      .then(res => res.json());
  }

  getInterviewNotifications(skip: number, amount: number): Promise<INotificationOption[]> {
    const url: string = this.concatParam('alloftype');
    const obj: any = this.makePagParams(skip, amount);
    obj.type = 2;
    return this.httpService.get(url, obj)
      .then(res => res.json());
  }

  updateNotificationsStatuses(ids: number[]): Promise<any> {
    const url: string = this.concatParam(`${this.httpService.UPDATE}/status`);
    return this.httpService.put(url, ids, this.httpService.stringify);
  }
}
