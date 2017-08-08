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

    this.sendRequest(this.candidate);
  }

  sendRequest(candidate: any): void {
    const resume: File = this.candidate.resume;
    delete this.candidate.resume;
    this.cService.addCandidate(candidate)
      .then((can: any) => {
        if (this.candidate.resume) {
          this.cService.attachInterview(this.candidate.id, resume)
            .then(res => console.log(res),
            err => console.log(err));
        }
        console.log(can);
        const url: string = `main-page/candidates/${can.id}`;
        this.cookie.updateUrl(url);
        this.router.navigate([url]);
        this.snackService.showSnack('Candidate successfully added!', 'SUCCESS');
      }, (err: any) => {
        this.snackService.showSnack('Candidate wasn`t created', 'ERROR');
      });
  }
}
