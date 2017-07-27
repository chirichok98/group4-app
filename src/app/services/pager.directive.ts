import { Directive, HostListener, Inject, OnInit, Input, 
         Output/*, TemplateRef, ViewContainerRef */} from '@angular/core';
import { PagerService } from './pager.service';
import { DOCUMENT } from '@angular/platform-browser';
import { ICandidatePreview } from './../interfaces/ICandidatePreview';
@Directive({
  selector: '[scroll]',
})
export class PagerDirective {
  constructor(private pagerService : PagerService, 
              @Inject(DOCUMENT) private document: Document) { /*, 
              private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef*/ 
    this.startLoad();
  }
  amount: number = 19;
  sup: number = 400;
  number : number;
  candidates: any;
  @Input() q;
  @Output() out;
  @Input('scroll') qqq;
  @Input() set qq(condition: any) {
    if (condition) {
      console.log(this.q, this.qqq);
    }
    this.pagerService.getPager(0, this.amount)
    .then((items) => { console.log(items); this.out = items;});
  }
  
  @HostListener('window:scroll', []) onScroll() {
    this.number  = this.document.body.scrollTop;
    if (this.number > this.sup) {
      console.log(this.number, this.sup);
      console.log(Math.ceil(this.sup / 10));
      this.loadMore(10);
      this.sup += 200;
    } 
  }
  private startLoad() {
    this.pagerService.getPager(0, this.amount)
    .then((items) => { console.log(items); this.candidates = items;});
  }
  private loadMore(val: number) {
    this.pagerService.getPager(0 + val, this.amount)
    .then((items) => { console.log(items); });
  }
}
