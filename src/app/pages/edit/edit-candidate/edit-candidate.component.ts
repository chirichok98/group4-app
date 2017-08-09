import { Component, OnInit } from '@angular/core';
import { ICandidateDetail } from '../../../interfaces/ICandidateDetail';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { MyCookieService } from '../../../services/cookie.service';
import { SnackbarService } from '../../../services/snackbar.service';
import { CandidateService } from '../../../services/candidate.service';

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
              private cService: CandidateService,
              private snackService: SnackbarService) {
    this.route.params.subscribe((params: ParamMap) => {
      this.candidateId = +params['id'];
    });
    this.getCandidateById(this.candidateId);
  }

  getCandidateById(id) {
    this.cService.getCandidateById(id)
      .then((res: any) => {
        this.candidate = res;
        this.isLoaded = true;
      }, (error: any) => {
        this.snackService.showSnack('Candidate wasn`t loaded!', 'ERROR');
        this.isLoaded = true;
      });
  }

  ngOnInit() {
  }

  checkEmptyFields(obj: any): void {
    obj.candidatePrimarySkill = this.configureSkill(obj.candidatePrimarySkill);
    obj.candidateSecondarySkills = obj.candidateSecondarySkills.map((i: any) =>
      this.configureSkill(i));

    if (!Object.keys(obj.candidatePrimarySkill).length) delete obj.candidatePrimarySkill;
    if (!Object.keys(obj.contact).length) delete obj.contact;
    Object.keys(obj).forEach((i: any) => {
      if (!obj[i] || (Array.isArray(obj[i]) && !obj[i].length)) {
        delete obj[i];
      }
    });
    delete obj.hrm;
    delete obj.lastModifier;
  }

  configureSkill(skill): any {
    if (!skill.id || !skill.level) return {};
    const res: any = {
      id: skill.id,
      level: skill.level,
    };
    return res;
  }

  editCandidate() {
    const resume: File = this.candidate.resume;
    delete this.candidate.resume;

    const can: any = Object.assign({}, this.candidate);
    this.checkEmptyFields(can);

    console.log(can);
    this.sendRequest(can, resume);
  }

  sendRequest(candidate: any, resume: any): void {
    this.cService.updateCandidate(candidate)
      .then((res: any) => {
        if (resume) {
          this.cService.attachInterview(this.candidateId, resume)
            .then(res => console.log(res),
            err => console.log(err));
        }
        const url: string = `main-page/candidates/${this.candidateId}`;
        this.cookie.updateUrl(url);
        this.router.navigate([url]);
        this.snackService.showSnack('Candidate successfully edited!', 'SUCCESS');
      }, (error: any) => {
        this.snackService.showSnack('Candidate wasn`t edited!', 'ERROR');
      });
  }
}
