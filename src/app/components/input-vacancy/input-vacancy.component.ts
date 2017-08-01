import { Component, DoCheck, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { DictionariesService } from '../../services/dictionaries.service';
import { ITechSkill } from '../../interfaces/ITechSkill';
import { IGeneral } from '../../interfaces/IGeneral';

@Component({
  selector: 'input-vacancy',
  templateUrl: 'input-vacancy.component.html',
  styleUrls: ['input-vacancy.component.scss'],
})
export class InputVacancyComponent implements DoCheck {
  @Input() vacInfo: any = {};
  @Output() vacInfoChange: EventEmitter<any> = new EventEmitter<any>();

  statuses: IGeneral[] = [];
  cities: IGeneral[] = [];
  englishLevel: IGeneral[] = [];
  skills: ITechSkill[] = [];

  constructor(private router: Router,
              private hService: DictionariesService) {
    this.hService.getCities().then((cities) => {
      this.cities = cities;
      if (this.vacInfo.city) {
        this.vacInfo.city = this.cities.find(i => i.name === this.vacInfo.city).id;
      }
    });
    this.hService.getEnglishLevel().then((levels) => {
      this.englishLevel = levels;
      if (this.vacInfo.engLevel) {
        this.vacInfo.engLevel = this.englishLevel.find(i => i.name === this.vacInfo.engLevel).id;
      }
    });
    this.hService.getSkills().then((skills) => {
      this.skills = skills;
    });
    this.hService.getVacancyStatuses().then((statuses) => {
      this.statuses = statuses;
      if (this.vacInfo.status) {
        this.vacInfo.status = this.statuses.find(i => i.name === this.vacInfo.status).id;
      }
    });
  }

  ngDoCheck() {
    this.vacInfoChange.emit(this.vacInfo);
  }


  addSecondary() {
    this.vacInfo.secondarySkills.push({});
  }

  removeSecondary() {
    this.vacInfo.secondarySkills.pop();
  }
}
