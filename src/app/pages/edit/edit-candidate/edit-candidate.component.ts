import { Component, OnInit } from '@angular/core';
import { ICandidateDetail } from '../../../interfaces/ICandidateDetail';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { EditCandidateService } from '../../../services/edit-candidate.service';
import { MyCookieService } from '../../../services/cookie.service';

@Component({
  selector: 'edit-candidate',
  templateUrl: 'edit-candidate.component.html',
  styleUrls: ['edit-candidate.component.scss'],
})
export class EditCandidateComponent implements OnInit {
  isLoaded: boolean = false;
  candidateId: number;
  candidate: any;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private cookie: MyCookieService, 
              private ecService: EditCandidateService) {
    this.route.params.subscribe((params: ParamMap) => {
      this.candidateId = +params['id'];
    });
    this.getCandidateById(this.candidateId);
  }

  getCandidateById(id) {
    this.ecService.getCandidateById(id)
      .then((res: any) => {
        this.candidate = res;
        this.isLoaded = true;
      }, (error: any) => {
        console.log('error with getting candidate');
        this.isLoaded = true;
      });
  }

  ngOnInit() {
  }

  configureSkill(skill): any {
    const res: any = {
      id: skill.id,
      level: skill.level,
    };
    return res;
  }

  editCandidate() {
    this.candidate.candidatePrimarySkill = 
      this.configureSkill(this.candidate.candidatePrimarySkill);
    this.candidate.candidateSecondarySkills = this.candidate.candidateSecondarySkills
      .map((i: any) => this.configureSkill(i));
    delete this.candidate.hrm;
    delete this.candidate.lastModifier;
    console.log(this.candidate);
    this.ecService.updateCandidate(this.candidate)
      .then((res: any) => {
        const url: string = `main-page/candidate/${this.candidateId}`;
        this.cookie.updateUrl(url);
        this.router.navigate([url]);
      }, (error: any) => {
        console.log(error);
      });
  }
}
