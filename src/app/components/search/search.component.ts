import { Component, Input } from '@angular/core';
import { DictionariesService } from '../../services/dictionaries.service';
import { TransferService } from '../../services/transfer.service';
import { RangeFormComponent } from '../range-form/range-form.component';
declare const $;
// export class SearchObject {
//   constructor(public _statuses?: any, public _cities?: any, public _canSt?: any,
//     public _skills?: any, public _vacSt?: any, public _hr?: any) {
//     this.statuses = _statuses;
//     this.cities = _cities;
//     this.skills = _skills;
//     this.canSt = _canSt;
//     this.vacSt = _vacSt;
//     this.hr = _hr;
//   }
//   statuses: any = [];
//   cities: any;
//   skills: any;
//   canSt: any;
//   vacSt: any;
//   hr: any;
// }
@Component({
  selector: 'search-panel',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})

export class SearchComponent {
  @Input() isCandidate: boolean;
  @Input() isVacancy: boolean;
  isAdvancedShown: boolean = false;
  search: any = { };
  statuses: any = [];
  cities: any;
  skills: any;
  canSt: any;
  vacSt: any;
  hr: any;

  constructor(private ds: DictionariesService, private nfs: TransferService) {
    this.ds.getCities().then((cities) => {
      this.cities = cities;
    });
    this.ds.getSkills().then((skills) => {
      this.skills = skills;
    });
    this.ds.getCandidateStatuses().then((statuses) => {
      this.canSt = statuses;
    });
    this.ds.getVacancyStatuses().then((statuses) => {
      this.vacSt = statuses;
    });
    this.ds.getHRs().then((hr) => {
      this.hr = hr;
    });
  }

  toggleAdvanced(): void {
    this.isAdvancedShown = !this.isAdvancedShown;
  }

  startSearch() {
    // console.log(Object.keys(this.search.primarySkill).length);
    // if (Object.keys(this.search.primarySkill).length === 0) {
    //   delete this.search.primarySkill;
    // }
    this.nfs.putData(this.search);
    // this.search.primarySkill = {};
  }

}
