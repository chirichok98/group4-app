import { Component, Input } from '@angular/core';
import { DictionariesService } from '../../services/dictionaries.service';

declare const $;

@Component({
  selector: 'search-panel',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  @Input() isCandidate: boolean;
  @Input() isVacancy: boolean;
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

  constructor(private hService: DictionariesService) {
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

  toggleAdvanced(): void {
    this.isAdvancedShown = !this.isAdvancedShown;
  }

  startSearch() {
    console.log(this.search);
  }
}
