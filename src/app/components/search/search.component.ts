import { Component, Input } from '@angular/core';
import { DictionariesService } from '../../services/dictionaries.service';
import { TransferService } from '../../services/transfer.service';
import { SearchCleanerService } from '../../services/search-cleaner.service';
import { RangeFormComponent } from '../range-form/range-form.component';
declare const $;

@Component({
  selector: 'search-panel',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})

export class SearchComponent {
  @Input() isCandidate: boolean;
  @Input() isPosition: boolean;
  isAdvancedShown: boolean = false;
  search: any = {};
  statuses: any = [];
  cities: any;
  skills: any;
  canSt: any;
  vacSt: any;
  hr: any;

  constructor(private ds: DictionariesService, 
              private transferService: TransferService,
              private searchCleanerService: SearchCleanerService) {
    searchCleanerService.getInfo().subscribe((data) => {
      this.search = data;
    });
                
    this.ds.getCities().then((cities) => {
      this.cities = cities;
    });
    this.ds.getSkills().then((skills) => {
      this.skills = skills;
    });
    this.ds.getCandidateStatuses().then((statuses) => {
      this.canSt = statuses;
    });
    this.ds.getPositionStatuses().then((statuses) => {
      this.vacSt = statuses;
    });
    this.ds.getHRs().then((hr) => {
      this.hr = hr;
    });
  }

  private toggleAdvanced(): void {
    this.isAdvancedShown = !this.isAdvancedShown;
  }

  private startSearch() {
    this.transferService.putData(this.search, 'search');
  }
  private isSearchEmpty() {
    for (const key in this.search) {
      return false;
    }
    return true;
  }
}
