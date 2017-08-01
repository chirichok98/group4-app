import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { MyCookieService } from '../../../services/cookie.service';
import { PositionService } from '../../../services/position.service';
import { SnackbarService } from '../../../services/snackbar.service';

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
              private pService: PositionService,
              private snackService: SnackbarService) {
    this.route.params.subscribe((params: ParamMap) => {
      this.vacancyId = +params['id'];
    });
    this.getPositionById(this.vacancyId);
  }

  getPositionById(id) {
    this.pService.getPositionById(id)
      .then((res: any) => {
        this.vacancy = res;
        this.isLoaded = true;
      }, (error: any) => {
        this.snackService.showSnack('Position wasn`t loaded!', 'ERROR');
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
    this.pService.updatePosition(this.vacancy)
      .then((res: any) => {
        const url: string = `main-page/vacancies/${this.vacancyId}`;
        this.cookie.updateUrl(url);
        this.router.navigate([url]);
        this.snackService.showSnack('Position was successfully edited!', 'SUCCESS');
      }, (error: any) => {
        this.snackService.showSnack('Position wasn`t edited!', 'ERROR');
      });
  }
}
