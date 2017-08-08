import { Injectable, HostListener, Inject } from '@angular/core';
import { HttpService } from './http.service';

@Injectable()
export class PagerService {
  url: string;
  constructor(private httpService: HttpService) { }
  amount: number = 20;
  initAmount: number = 20;
  skip: number = 20;
  private getPager(skip: number = 0, amount: number, searchModel?: any, 
                   sortModel?: any): Promise<any> {
    const pagerParams: any = { skip, amount };
    let items: Promise<any>;
    if (searchModel && this.url === this.httpService.CAN_SEARCH) {
      console.log('candidate', searchModel);
      pagerParams.searchModel = searchModel;
    } else if (searchModel && this.url === this.httpService.VAC_SEARCH) {
      console.log('position', searchModel);
      pagerParams.searchModel = searchModel;
    }
    if (sortModel && this.url === this.httpService.CAN_SEARCH) {
      console.log('candidate', sortModel);
      pagerParams.sortModel = sortModel;
    } else if (sortModel && this.url === this.httpService.VAC_SEARCH) {
      console.log('position', sortModel);
      pagerParams.sortModel = sortModel;
    }
    console.log(pagerParams);
    items = this.httpService.post(this.url, pagerParams,
      this.httpService.DEF_HEADERS,
      this.httpService.stringify);
    return items;
  }
  init(url: string, amount?: number, searchModel?: any, sortModel?: any): Promise<any> {
    this.url = url;
    this.initAmount = amount;
    return this.getPager(0, amount || this.amount, searchModel, sortModel);
  }
  showMore(skip?: number, amount?: number, searchModel?: any, sortModel?: any) {
    return this.getPager(0 + (skip || this.skip), amount || this.amount, searchModel, sortModel);
  }
}
