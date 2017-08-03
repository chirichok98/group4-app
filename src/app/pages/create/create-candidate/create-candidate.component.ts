import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { SnackbarService } from '../../../services/snackbar.service';
import { CandidateService } from '../../../services/candidate.service';
import { MyCookieService } from '../../../services/cookie.service';

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
              private cookie: MyCookieService,
              private snackService: SnackbarService) { }

  addCandidate(): void {
    this.sendPostRequest(this.candidate);
  }

  sendPostRequest(candidate: any): void {
    this.cService.addCandidate(candidate)
      .then((can: any) => {
        this.cookie.updateUrl('main-page/candidates');
        this.router.navigate(['main-page/candidates']);
        this.snackService.showSnack('Candidate successfully added!','SUCCESS');
      }, (err: any) => {
        this.snackService.showSnack('Candidate wasn`t created','ERROR');
      });
  }
}
