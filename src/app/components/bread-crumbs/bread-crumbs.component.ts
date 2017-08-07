import { Component } from '@angular/core';
declare const $;

@Component({
  selector: 'bread-crumbs',
  templateUrl: 'bread-crumbs.component.html',
  styleUrls: ['bread-crumbs.component.scss'],
})
export class BreadCrumbsComponent {
  array: any = [];

  constructor() {
    console.log(document.location.href);
    const url = document.location.href;
    const item = {};
    let result: string = '';
    url.split(/\//).forEach((item, index) => {
      console.log(item);
      if (index === 0) {
        result += `${item}`;
      } else {
        result += `${item[0].toUpperCase()}${item.slice(1)}`;
      }
    });
    item['name'] = 'MAIN PAGE';
    this.array.push(item);
  }
}
