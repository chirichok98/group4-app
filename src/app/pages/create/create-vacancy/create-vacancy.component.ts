import { Component, OnInit, ViewChild, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { Router } from '@angular/router';

import { IGeneral } from '../../../interfaces/IGeneral';
import { ITechSkill } from '../../../interfaces/ITechSkill';

import { SelectFormComponent } from '../../../components/select-form/select-form.component';
// tslint:disable-next-line:max-line-length
import { DatepickerFormComponent } from '../../../components/datepicker-form/datepicker-form.component';
import { SkillFormComponent } from '../../../components/skill-form/skill-form.component';
import { DictionariesService } from '../../../services/dictionaries.service';
import { CreateVacancyService } from '../../../services/create-vacancy.service';



@Component({
  selector: 'create-vacancy',
  templateUrl: 'create-vacancy.component.html',
  styleUrls: ['create-vacancy.component.scss'],
})

export class CreateVacancyComponent implements OnInit {
  vacInfo: any = {
    secondarySkills: [],
    primarySkill: {},
  };

  statuses: IGeneral[] = [];
  cities: IGeneral[] = [];
  englishLevel: IGeneral[] = [];
  skills: ITechSkill[] = [];

  constructor(private router: Router,
              private hService: DictionariesService,
              private cvService: CreateVacancyService) {
    this.hService.getCities().then((cities) => {
      this.cities = cities;
    });
    this.hService.getEnglishLevel().then((levels) => {
      this.englishLevel = levels;
    });
    this.hService.getSkills().then((skills) => {
      this.skills = skills;
    });
    this.hService.getVacancyStatuses().then((statuses) => {
      this.statuses = statuses;
    });
  }

  ngOnInit() { }

  addVacancy(): void {
    this.sendPostRequest(this.vacInfo);
    console.log(this.vacInfo);
  }

  sendPostRequest(vacancy: any): void {
    this.cvService.addVacancy(vacancy)
      .then((vac: any) => {
        this.router.navigate(['main-page/vacancies']);
      }, (err: any) => {
        console.log('Error with vacancy creation');
      });
  }

  addSecondary() {
    this.vacInfo.secondarySkills.push({});
  }

  removeSecondary() {
    this.vacInfo.secondarySkills.pop();
  }
}
