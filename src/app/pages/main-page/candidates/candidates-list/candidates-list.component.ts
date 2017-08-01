import { Component, EventEmitter, Output } from '@angular/core';

import { ICandidatePreview } from '../../../../interfaces/ICandidatePreview';
import { MyCookieService } from '../../../../services/cookie.service';
import { Router } from '@angular/router';
import { PagerService } from '../../../../services/pager.service';
import { SnackbarService } from '../../../../services/snackbar.service';

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
              private cookie: MyCookieService,
              private router: Router,
              private snackService: SnackbarService) {
    this.pagerService.init('api/candidate')
      .then((candidates) => {
        this.candidates = candidates;
        this.isSpinnerVisible = false;
      }, (error) => {
        this.snackService.showSnack('Candidates wasn`t loaded!', 'ERROR');
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
        this.candidates = this.candidates.concat(candidates);
        this.isSpinnerVisible = false;
        if (this.paramsQueue.length) {
          this.onScroll();
        }
      }, (error) => {
        this.snackService.showSnack('Candidates wasn`t loaded!', 'ERROR');
        this.isSpinnerVisible = false;
      });
  }

  addCandidate(): void {
    const url: string = 'create/candidate';
    this.cookie.updateUrl(url);
    this.router.navigate([url]);
  }
}
