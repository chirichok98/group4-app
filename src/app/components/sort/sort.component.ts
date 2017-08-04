import { Component, Input } from '@angular/core';
import { TransferService } from '../../services/transfer.service';
declare const $;
@Component({
  selector: 'sort-panel',
  templateUrl: 'sort.component.html',
  styleUrls: ['sort.component.scss'],
})

export class SortComponent {
  @Input() isCandidate: boolean;
  @Input() isVacancy: boolean;
  sort: any = {};
  private candidateStates: number[] = [0, 0, 0];
  private vacancyStates: number[] = [0, 0, 0];
  private currentStates: number[] = [];

  private candidateOptions: string[] = ['creation-date', 'last-contact-date', 'remind-date'];
  private vacancyOptions: string[] = ['start-date', 'close-date', 'request-date'];
  private currentOptions: string[] = [];

  constructor(private transferService: TransferService) { }

  private checkSortState(state: string) {
    switch (state) {
      case 'candidate': {
        this.currentOptions = this.candidateOptions;
        this.currentStates = this.candidateStates;
        this.vacancyStates = [0, 0, 0];
        break;
      }
      case 'vacancy': {
        this.currentOptions = this.vacancyOptions;
        this.currentStates = this.vacancyStates;
        this.candidateStates = [0, 0, 0];
        break;
      }
    }
    const classlist = event.srcElement.classList;
    console.log(classlist);
    this.currentOptions.forEach((item, index) => {
      if (classlist.contains(item)) {
        this.changeSortState(item, index);
      }
    });
  }

  private changeSortState(item, index): void {
    this.currentStates[index] += 1;
    this.currentStates[index] %= 3;
    this.currentOptions.forEach((it, i) => {
      if (i !== index) {
        this.currentStates[i] = 0;
      }
    });
    console.log(this.currentStates);
    this.startSort();
    this.showChanges(item, this.currentStates[index]);
  }

  private showChanges(item, state): void {
    console.log('.' + item + '-icon');
    // console.log(state);
    this.currentOptions.forEach((it) => {
      $('.' + it + '-icon').css({
        opacity: '0',
        transform: 'rotate(270deg)',
      });
    });
    switch (state) {
      case 0: $('.' + item + '-icon').css({
        opacity: '0',
        transform: 'rotate(270deg)',
        'transition-duration': '500ms',
      }); break;
      case 1: $('.' + item + '-icon').css({
        opacity: '1',
        transform: 'rotate(90deg)',
        'transition-duration': '500ms',
      }); break;
      case 2: $('.' + item + '-icon').css({
        opacity: '1',
        transform: 'rotate(270deg)',
        'transition-duration': '500ms',
      }); break;
    }
  }

  private startSort() {
    console.log(this.defineSortModel());
    this.transferService.putData(this.defineSortModel(), 'sort');
  }

  private defineSortModel(): any {
    const sortModel = {};
    this.currentStates.forEach((item, index) => {
      const option = this.currentOptions[index];
      switch (item) {
        case 1: {
          sortModel[this.defineOption(option)] = false;
          break;
        }
        case 2: {
          sortModel[this.defineOption(option)] = true;
          break;
        }
        default: break;
      }
    });
    return sortModel;
  }
  // abc-def-ghi -> abcDefGhi
  defineOption(classname: string): string { 
    let result: string = '';
    classname.split(/-/).forEach((item, index) => {
      if (index === 0) {
        result += `${item}`;
      } else {
        result += `${item[0].toUpperCase()}${item.slice(1)}`;
      }
    });
    console.log(result);
    return result;
  }
}

