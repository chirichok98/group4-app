import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { MyCookieService } from '../../../services/cookie.service';
import { EditCandidateService } from '../../../services/edit-candidate.service';
import { EditVacancyService } from '../../../services/edit-vacancy.service';

@Component({
  selector: 'edit-vacancy',
  templateUrl: 'edit-vacancy.component.html',
  styleUrls: ['edit-vacancy.component.scss'],
})
export class EditVacancyComponent implements OnInit {
  isLoaded: boolean = false;
  vacancyId: number;
  vacancy: any;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private cookie: MyCookieService,
              private evService: EditVacancyService) {
    this.route.params.subscribe((params: ParamMap) => {
      this.vacancyId = +params['id'];
    });
    this.getVacancyById(this.vacancyId);
  }

  getVacancyById(id) {
    this.evService.getVacancyById(id)
      .then((res: any) => {
        this.vacancy = res;
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

  editVacancy() {
    this.vacancy.candidates = this.vacancy.candidates.map(i => i.id);
    this.vacancy.primarySkill = this.configureSkill(this.vacancy.primarySkill);
    this.vacancy.secondarySkills = this.vacancy.secondarySkills
      .map((i: any) => this.configureSkill(i));
    delete this.vacancy.hrm;
    this.evService.updateVacancy(this.vacancy)
      .then((res: any) => {
        const url: string = `main-page/vacancies/${this.vacancyId}`;
        this.cookie.updateUrl(url);
        this.router.navigate([url]);
      }, (error: any) => {
        console.log(error);
      });
  }
}
