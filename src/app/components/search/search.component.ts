import { Component } from '@angular/core';

declare const $;

@Component({
  selector: 'search-panel',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  options: any = [{}];
  constructor() {
  }

  addOption(): void {
    this.options.push({});
  }

  removeOption(): void {
    this.options.pop();
  }
}
