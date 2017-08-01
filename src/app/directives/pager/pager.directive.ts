import { Directive, HostListener, Inject, OnInit, 
         Input, EventEmitter, Output} from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { ICandidatePreview } from './../../interfaces/ICandidatePreview';
@Directive({
  selector: '[scroll]',
})
export class PagerDirective {
  constructor(@Inject(DOCUMENT) private document: Document) { }
  scrollValue: number = 0;
  scrollBorder: number = 200;
  skip: number = 0;
  @Output() update = new EventEmitter<any>();
  @HostListener('window:scroll') onScroll() {
    this.scrollValue  = this.document.body.scrollTop;
    if (this.scrollValue > this.scrollBorder) {
      this.scrollBorder += 200;
      this.skip += 10;
      this.update.emit({ skip: this.skip });
    } 
  }
}
