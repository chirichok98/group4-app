import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, ParamMap } from '@angular/router';
import { ICandidateDetail } from '../../../../interfaces/ICandidateDetail';
import { CandidateService } from '../../../../services/candidate.service';

@Component({
  selector: 'candidates-list-item',
  templateUrl: 'candidates-list-item.component.html',
  styleUrls: ['./candidates-list-item.component.scss'],
})

export class CandidatesListItemComponent implements OnInit {
  currentCandidate: Promise<ICandidateDetail>;
  currentCandidateId: number;

  constructor(private route: ActivatedRoute, private cService: CandidateService) {
    this.route.params.subscribe((params: ParamMap) => {
      this.currentCandidateId = +params['id'];
    });
  }

  getCandidateById(id) {
    this.currentCandidate = this.cService.getCandidateById(id);
  }

  ngOnInit() {
    this.getCandidateById(this.currentCandidateId);
  }
}
