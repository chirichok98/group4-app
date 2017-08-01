import { Component } from '@angular/core';
import { DictionariesService } from '../../services/dictionaries.service';
import { Router } from '@angular/router';

declare const $;

@Component({
  selector: 'search-panel',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  isCandidate: boolean;
  isVacancy: boolean;
  isAdvancedShown: boolean = false;
  search: any = {
    primarySkill: {},
  };
  statuses: any = [];
  cities: any;
  skills: any;
  canSt: any;
  vacSt: any;
  hr: any;

  constructor(private hService: DictionariesService, private router: Router) {
    this.hService.getCities().then((cities) => {
      this.cities = cities;
    });
    this.hService.getSkills().then((skills) => {
      this.skills = skills;
    });
    this.hService.getCandidateStatuses().then((statuses) => {
      this.canSt = statuses;
    });
    this.hService.getVacancyStatuses().then((statuses) => {
      this.vacSt = statuses;
    });
    this.hService.getHRs().then((hr) => {
      this.hr = hr;
    });
  }

  getStateFromUrl(url: string): void {
    const start: number = url.indexOf('/');
    const end: number = url.lastIndexOf('/');
    let stateName: string;
    if (start === end) {
      stateName = url.slice(start + 1);
    } else {
      stateName = url.slice(start + 1, end);
    }

    if (stateName === 'candidates')
      this.setWindowOwner(true, false);
    if (stateName === 'vacancies')
      this.setWindowOwner(false, true);
  }

  setWindowOwner(can: boolean, vac: boolean) {
    this.isCandidate = can;
    this.isVacancy = vac;
  }

  ngDoCheck() {
    const url = this.router.url.slice(1);
    this.getStateFromUrl(url);
  }

  toggleAdvanced(): void {
    this.isAdvancedShown = !this.isAdvancedShown;
  }

  startSearch() {
    console.log(this.search);
  }
}
