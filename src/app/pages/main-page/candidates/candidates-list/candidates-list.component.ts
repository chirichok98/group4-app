import { Component, OnInit } from '@angular/core';

import { ICandidatePreview } from '../../../../interfaces/ICandidatePreview';
import { CandidatesListService } from '../../../../services/candidates-list.service';

@Component({
  selector: 'candidates-list',
  templateUrl: 'candidates-list.component.html',
  styleUrls: ['./candidates-list.component.scss'],
})
export class CandidatesListComponent implements OnInit {
  isSpinnerVisible: boolean = true;
  candidates: ICandidatePreview[];
  skip: number = 0;
  amount: number = 50;

  constructor(private clService: CandidatesListService) {
    this.clService.getCandidates(this.skip, this.amount)
      .then((candidates) => {
        this.candidates = candidates;
        this.isSpinnerVisible = false;
      }, (error) => {
        console.log('Candidates error');
        this.isSpinnerVisible = false;
      });
  }

  ngOnInit() {
  }
}
