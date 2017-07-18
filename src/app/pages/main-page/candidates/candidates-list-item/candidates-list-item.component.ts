import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, ParamMap } from '@angular/router';
import { ICandidateDetail } from '../../../../interfaces/ICandidateDetail';
import { CandidatesListItemService } from './candidates-list-item.service';

@Component({
  selector: 'candidates-list-item',
  templateUrl: 'candidates-list-item.component.html',
  styleUrls: ['./candidates-list-item.component.scss'],
})

export class CandidatesListItemComponent implements OnInit {
  currentCandidateId: number;
  currentCandidate: Promise<ICandidateDetail>;

  constructor(private route: ActivatedRoute, private cliService: CandidatesListItemService) {
    this.route.params.subscribe((params: ParamMap) => {
      this.currentCandidateId = +params['id'];
    });
  }

  getCandidateById(id) {
    this.currentCandidate = this.cliService.getCandidateById(id);
  }

  ngOnInit() {
    this.getCandidateById(this.currentCandidateId);
  }
}
