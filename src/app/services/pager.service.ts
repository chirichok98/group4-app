import { Injectable, HostListener, Inject } from '@angular/core';
import { HttpService } from './http.service';
import { DOCUMENT } from '@angular/platform-browser';

@Injectable()
export class PagerService {
  constructor(private httpService: HttpService) { }
  amount: number = 10;
  skip: number = 10;
  private getPager(skip: number = 0, amount: number): Promise<any> {
    const pagerParams: any = { skip, amount };
    const items: Promise<any> =
      this.httpService.get(this.httpService.CAN_URL, pagerParams);
    return items;
  }
  init(amount?: number): Promise<any> {
    return this.getPager(0, amount || this.amount);
  }
  more(skip?: number, amount?: number) {
    return this.getPager(0 + (skip || this.skip), amount || this.amount);
  }
}
