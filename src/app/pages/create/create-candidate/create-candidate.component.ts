import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { SnackbarService } from '../../../services/snackbar.service';
import { CandidateService } from '../../../services/candidate.service';

@Component({
  selector: 'create-candidate',
  templateUrl: 'create-candidate.component.html',
  styleUrls: ['create-candidate.component.scss'],
})
export class CreateCandidateComponent {
  candidate: any = {
    contact: { },
    candidatePrimarySkill: {},
    candidateSecondarySkills: [],
    candidatePrevJobs: [],
  };

  constructor(private cService: CandidateService, 
              private router: Router,
              private snackService: SnackbarService) { }

  addCandidate(): void {
    this.sendPostRequest(this.candidate);
  }

  sendPostRequest(candidate: any): void {
    this.cService.addCandidate(candidate)
      .then((can: any) => {
        this.router.navigate(['main-page/candidates']);
        this.snackService.showSnack('Candidate successfully added!','SUCCESS');
      }, (err: any) => {
        this.snackService.showSnack('Candidate wasn`t created','ERROR');
      });
  }
}
