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
    contact: {},
    candidatePrimarySkill: {},
    candidateSecondarySkills: [],
    candidatePrevJobs: [],
  };

  constructor(private cService: CandidateService,
              private router: Router,
              private cookie: MyCookieService,
              private snackService: SnackbarService) { }

  addCandidate(): void {
    const can: any = Object.assign({}, this.candidate);
    this.checkEmptyFields(can);

    this.sendRequest(can);
  }


  checkEmptyFields(obj: any): void {
    if (!Object.keys(obj.contact).length) {
      delete obj.contact;
    }
    if (!Object.keys(obj.candidatePrimarySkill).length) {
      delete obj.candidatePrimarySkill;
    }
    if (!obj.candidatePrevJobs.length) {
      delete obj.candidatePrevJobs;
    }
    if (!obj.candidateSecondarySkills.length) {
      delete obj.candidateSecondarySkills;
    }
  }

  sendRequest(candidate: any): void {
    const resume: File = this.candidate.resume;
    delete this.candidate.resume;
    this.cService.addCandidate(candidate)
      .then(res => res.json())
      .then((can: any) => {
        if (this.candidate.resume) {
          this.cService.attachInterview(this.candidate.id, resume)
            .then(res => console.log(res),
            err => console.log(err));
        }
        const url: string = `main-page/candidates/${can}`;
        this.cookie.updateUrl(url);
        this.router.navigate([url]);
        this.snackService.showSnack('Candidate successfully added!', 'SUCCESS');
      }, (err: any) => {
        this.snackService.showSnack('Candidate wasn`t created', 'ERROR');
      });
  }
}
