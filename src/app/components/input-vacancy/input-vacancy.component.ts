import { Component, DoCheck, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { DictionariesService } from '../../services/dictionaries.service';
import { CreateVacancyService } from '../../services/create-vacancy.service';
import { ITechSkill } from '../../interfaces/ITechSkill';
import { IGeneral } from '../../interfaces/IGeneral';

@Component({
  selector: 'input-vacancy',
  templateUrl: 'input-vacancy.component.html',
  styleUrls: ['input-vacancy.component.scss'],
})
export class InputVacancyComponent implements DoCheck {
  @Input() vacInfo: any;
  @Output() vacInfoChange: EventEmitter<any> = new EventEmitter<any>();

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
