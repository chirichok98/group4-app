import { Component } from '@angular/core';
import { DictionariesService } from '../../services/dictionaries.service';
import { NavbarFunctionsService } from '../../services/navbar-functions.service';
import { Router } from '@angular/router';

declare const $;
export class SearchObject {
  constructor(public _statuses?: any, public _cities?: any, public _canSt?: any,
              public _skills?: any, public _vacSt?: any, public _hr?: any) {
    this.statuses = _statuses;
    this.cities = _cities;
    this.skills = _skills;
    this.canSt = _canSt;
    this.vacSt = _vacSt;
    this.hr = _hr;
  }
  statuses: any = [];
  cities: any;
  skills: any;
  canSt: any;
  vacSt: any;
  hr: any;
}
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
  searchObject: SearchObject = new SearchObject;

  constructor(private ds: DictionariesService, private router: Router,
              private nfs: NavbarFunctionsService) {
    this.ds.getCities().then((cities) => {
      this.searchObject.cities = cities;
    });
    this.ds.getSkills().then((skills) => {
      this.searchObject.skills = skills;
    });
    this.ds.getCandidateStatuses().then((statuses) => {
      this.searchObject.canSt = statuses;
    });
    this.ds.getVacancyStatuses().then((statuses) => {
      this.searchObject.vacSt = statuses;
    });
    this.ds.getHRs().then((hr) => {
      this.searchObject.hr = hr;
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
    this.nfs.gg(this.searchObject);
  }
}
