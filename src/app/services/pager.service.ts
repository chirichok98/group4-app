//  dependencies //
import { Injectable, HostListener, Inject } from '@angular/core';
import { HttpService } from './http.service';
import { DOCUMENT } from '@angular/platform-browser';
//  service  //

@Injectable() // This directive adds ability to use other services.

export class PagerService {
  constructor(private httpService: HttpService,  
              @Inject(DOCUMENT) private document: Document) { 
    this.startLoad(); 
  }
  amount: number = 19;
  sup: number = 400;
  number : number;
  candidates: any;
  @HostListener('window:scroll', []) onScroll() {
    this.number  = this.document.body.scrollTop;
    if (this.number > this.sup) {
      console.log(this.number, this.sup);
      console.log(Math.ceil(this.sup / 10));
      this.loadMore(10);
      this.sup += 200;
    } 
  }
  getPager(skip: number = 0, amount: number = 19): Promise<any> {
    const pagerParams: any = { skip, amount };
    const items: Promise<any> =
      this.httpService.get(this.httpService.CAN_URL, pagerParams);
    return items;
  }
  private startLoad() {
    this.getPager(0, this.amount)
    .then((items) => { console.log(items); this.candidates = items;});
  }
  private loadMore(val: number) {
    this.getPager(0 + val, this.amount)
    .then((items) => { console.log(items); });
  }
}
