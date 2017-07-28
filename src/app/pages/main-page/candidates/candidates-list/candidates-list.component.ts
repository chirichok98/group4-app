import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { ICandidatePreview } from '../../../../interfaces/ICandidatePreview';
import { CandidatesListService } from '../../../../services/candidates-list.service';
import { PagerService } from '../../../../services/pager.service';

@Component({
  selector: 'candidates-list',
  templateUrl: 'candidates-list.component.html',
  styleUrls: ['./candidates-list.component.scss'],
})
export class CandidatesListComponent {
  isSpinnerVisible: boolean = true;
  candidates: ICandidatePreview[];

  constructor(private pagerService: PagerService) {
    this.pagerService.init()
      .then((candidates) => {
        console.log(candidates);
        this.candidates = candidates;
        this.isSpinnerVisible = false;
      }, (error) => {
        console.log('Candidates error');
        this.isSpinnerVisible = false;
      });
  }
  onScroll(pager: PagerService) {
    console.log(pager.skip);
    this.pagerService.more(pager.skip)
      .then((candidates) => {
        console.log(candidates);
        this.candidates.push(candidates);
        this.isSpinnerVisible = false;
      }, (error) => {
        console.log('Candidates error');
        this.isSpinnerVisible = false;
      });
  }
}
