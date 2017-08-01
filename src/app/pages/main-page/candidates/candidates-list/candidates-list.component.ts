import { Component, EventEmitter, Output } from '@angular/core';

import { ICandidatePreview } from '../../../../interfaces/ICandidatePreview';
import { MyCookieService } from '../../../../services/cookie.service';
import { Router } from '@angular/router';
import { PagerService } from '../../../../services/pager.service';
import { HttpService } from '../../../../services/http.service';

@Component({
  selector: 'candidates-list',
  templateUrl: 'candidates-list.component.html',
  styleUrls: ['./candidates-list.component.scss'],
})
export class CandidatesListComponent {
  isSpinnerVisible: boolean = true;
  candidates: ICandidatePreview[];
  paramsQueue: any = [];
  constructor(private pagerService: PagerService, 
              private httpService: HttpService,
              private cookie: MyCookieService,
              private router: Router) {
    this.pagerService.init(httpService.CAN)
      .then((candidates) => {
        console.log(candidates);
        this.candidates = candidates;
        this.isSpinnerVisible = false;
      }, (error) => {
        console.log('Candidates error');
        this.isSpinnerVisible = false;
      });
  }
  onScroll(pager?: PagerService) {
    if (pager) {
      this.paramsQueue.push(pager.skip);
    }
    const params = this.paramsQueue.shift();
    this.pagerService.more(params)
      .then((candidates) => {
        console.log(candidates);
        this.candidates = this.candidates.concat(candidates);
        this.isSpinnerVisible = false;
        if (this.paramsQueue.length) {
          this.onScroll();
        }
      }, (error) => {
        console.log('Candidates error');
        this.isSpinnerVisible = false;
      });
  }

  addCandidate(): void {
    const url: string = 'create/candidate';
    this.cookie.updateUrl(url);
    this.router.navigate([url]);
  }
}
