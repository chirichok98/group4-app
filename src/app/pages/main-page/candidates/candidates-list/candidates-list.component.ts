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

  constructor(private clService: CandidatesListService) {
    this.clService.getAllCandidates().then((candidates) => {
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
