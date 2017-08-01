import {
  Directive, HostListener, Inject, OnInit,
  Input, EventEmitter, Output,
} from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { ICandidatePreview } from './../../interfaces/ICandidatePreview';
declare const $;
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
    this.scrollValue = this.document.body.scrollTop;
    console.log(this.scrollValue, this.document.body.scrollHeight - $(window).height());
    if (this.scrollValue === this.document.body.scrollHeight - $(window).height()) {
      this.skip += 10;
      this.update.emit({ skip: this.skip });
    }
  }
}
