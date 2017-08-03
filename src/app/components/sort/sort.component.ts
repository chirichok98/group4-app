import { Component, Input } from '@angular/core';
declare const $;
@Component({
  selector: 'sort-panel',
  templateUrl: 'sort.component.html',
  styleUrls: ['sort.component.scss'],
})

export class SortComponent {
  @Input() isCandidate: boolean;
  @Input() isVacancy: boolean;
  sort: any = { };
  stateArray: number[] = [0, 0, 0];
  optionsArray: string[] = ['start-date', 'close-date', 'request-date'];
  constructor() { 
    $('.start-date-icon').css({ 
      opacity: '1', 
      transform: 'rotate(90deg)',
      'transition-duration': '500ms', 
    }); 
  }
  checkSortState() {
    const classlist = event.srcElement.classList;
    this.optionsArray.forEach((item, index) => {
      console.log(classlist);
      if (classlist.contains(item)) {
        this.changeSortState(item, index);
      }
    });
  }
  private changeSortState(item, index): void {
    this.stateArray[index] += 1;
    this.stateArray[index] %= 3;
    this.optionsArray.forEach((it, i) => {
      if (i !== index) {
        this.stateArray[i] = 0;
      }
    });
    console.log(this.stateArray);
    this.showChanges(item, this.stateArray[index]);
  }
  private showChanges(item, state): void {
    console.log('.' + item + '-icon');
    console.log(state);
    this.optionsArray.forEach((it) => {
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
}
