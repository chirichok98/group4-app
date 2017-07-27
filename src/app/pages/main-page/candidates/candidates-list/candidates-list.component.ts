import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { ICandidatePreview } from '../../../../interfaces/ICandidatePreview';
import { CandidatesListService } from '../../../../services/candidates-list.service';
import { PagerService } from '../../../../services/pager.service';

// import { PagerDirective } from '../../../../services/pager.directive';

@Component({
  selector: 'candidates-list',
  templateUrl: 'candidates-list.component.html',
  styleUrls: ['./candidates-list.component.scss'],
})
export class CandidatesListComponent implements OnInit {
  isSpinnerVisible: boolean = true;
  candidates: ICandidatePreview[];
  @ViewChild(PagerService) can : ElementRef;
  skip: number = 0;
  amount: number = 10;

  constructor(private pagerService: PagerService) {
      // this.pagerService.getPager(this.skip, this.amount)
      //   .then((candidates) => {
      //     console.log(candidates);
      //     this.candidates = candidates;
      //     this.isSpinnerVisible = false;
      //   }, (error) => {
      //     console.log('Candidates error');
      //     this.isSpinnerVisible = false;
      //   });  
  }

  ngOnInit() {
  }
}
