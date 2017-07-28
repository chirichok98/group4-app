import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { CreateCandidateService } from '../../../services/create-candidate.service';

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

  constructor(private ccService: CreateCandidateService, private router: Router) { }

  addCandidate(): void {
    this.sendPostRequest(this.candidate);
    console.log(this.candidate);
  }

  sendPostRequest(candidate: any): void {
    this.ccService.addCandidate(candidate)
      .then((can: any) => {
        this.router.navigate(['main-page/candidates']);
      }, (err: any) => {
        console.log('Error with candidate creation');
      });
  }
}
