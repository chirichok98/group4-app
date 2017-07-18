import { Component, OnInit } from '@angular/core';

import { ICandidatePreview } from '../../../../interfaces/ICandidatePreview';
import { CandidatesListService } from './candidates-list.service';

@Component({
  selector: 'candidates-list',
  templateUrl: 'candidates-list.component.html',
  styleUrls: ['./candidates-list.component.scss'],
})
export class CandidatesListComponent implements OnInit {
  candidates: Promise<ICandidatePreview[]>;

  constructor(private clService: CandidatesListService) {
    this.candidates = this.clService.getAllCandidates();
  }

  ngOnInit() {
  }
}
