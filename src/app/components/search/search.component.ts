import { Component } from '@angular/core';
import { DictionariesService } from '../../services/dictionaries.service';
import { Router } from '@angular/router';

declare const $;

const canFields: any = [
  {
    id: 1,
    name: 'Surname(RU)',
    value: 'lastNameRus',
    type: 'input',
  },
  {
    id: 2,
    name: 'Surname(EN)',
    value: 'lastNameEng',
    type: 'input',
  },
  {
    id: 3,
    name: 'Phone number',
    value: 'phone',
    type: 'input',
  },
  {
    id: 4,
    name: 'Email',
    value: 'email',
    type: 'input',
  },
  {
    id: 5,
    name: 'Skype',
    value: 'skype',
    type: 'input',
  },
  {
    id: 12,
    name: 'HR Manager',
    value: 'hrm',
    type: 'select',
  },
  {
    id: 7,
    name: 'City',
    value: 'city',
    type: 'select',
  },
  {
    id: 8,
    name: 'Status',
    value: 'status',
    type: 'select',
  },
  {
    id: 10,
    name: 'Primary skill',
    value: 'primarySkill',
    type: 'select',
  },
];
const vacFields: any = [
  {
    id: 1,
    name: 'Project name',
    value: 'projectName',
    type: 'input',
  },
  {
    id: 2,
    name: 'Vacancy name',
    value: 'vacancyName',
    type: 'input',
  },
  {
    id: 3,
    name: 'Request date',
    value: 'requestDate',
    type: 'date',
  },
  {
    id: 4,
    name: 'Start date',
    value: 'startDate',
    type: 'date',
  },
  {
    id: 5,
    name: 'Close date',
    value: 'closeDate',
    type: 'date',
  },
  {
    id: 7,
    name: 'City',
    value: 'city',
    type: 'select',
  },
  {
    id: 6,
    name: 'Status',
    value: 'status',
    type: 'select',
  },
  {
    id: 10,
    name: 'Primary skill',
    value: 'primarySkill',
    type: 'skill-form',
  },
  {
    id: 11,
    name: 'Secondary skill',
    value: 'secondarySkill',
    type: 'skill-form',
  },
];

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
  options: any = [{}];
  cities: any;
  skills: any;
  canSt: any;
  vacSt: any;
  hr: any;
  // add hr 

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
