import { Component } from '@angular/core';
declare const $;

@Component({
  selector: 'bread-crumbs',
  templateUrl: 'bread-crumbs.component.html',
  styleUrls: ['bread-crumbs.component.scss'],
})
export class BreadCrumbsComponent {
  array: any = [];
  untilMainPage: boolean = false;
  constructor() {
    console.log(document.location.href);
    const url = document.location.href;
    const item = {};
    // item['name'] = 'MAIN PAGE';
    // this.array.push(item);
    // let result: string = '';
    url.split(/\//).forEach((item, index) => {
      if (this.untilMainPage) {
        console.log(item);
        let result = '';
        item.split(/-/).forEach((item,index) => {
          result += `${item.toUpperCase()}`;
          result += `${' '}`;
        });
        const obj = {};
        obj['name'] = result.substring(0, result.length - 1);
        this.array.push(obj);
      }
      if (item === 'main-page') {
        this.untilMainPage = true;
      }
    });
  }
}
