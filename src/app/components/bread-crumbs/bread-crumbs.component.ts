import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MyCookieService } from '../../services/cookie.service';
import { DOCUMENT } from '@angular/platform-browser';
declare const $;

@Component({
  selector: 'bread-crumbs',
  templateUrl: 'bread-crumbs.component.html',
  styleUrls: ['bread-crumbs.component.scss'],
})
export class BreadCrumbsComponent {
  array: any = [];
  untilMainPage: boolean = false;
  // amount: number = 0;
  constructor(private router: Router,
              private route: ActivatedRoute,
              private cookie: MyCookieService) {
    console.log(document.location.href);
    const fullUrl = document.location.href;
    const item = {};
    // item['name'] = 'MAIN PAGE';
    // this.array.push(item);
    let url = '';
    fullUrl.split(/\//).forEach((item, index) => {
      if (item === 'main-page') {
        this.untilMainPage = true;
      }
      if (this.untilMainPage) {
        // this.amount++;
        const obj = {};
        
        url += `${item}`;
        url += `${'/'}`;
        obj['url'] = url.substring(0, url.length - 1);
        
        let name = '';
        item.split(/-/).forEach((item,index) => {
          name += `${item.toUpperCase()}`;
          name += `${' '}`;
        });
        obj['name'] = name.substring(0, name.length - 1);
        this.array.push(obj);
      }
    });
  }
  private navigate(url) {
    this.cookie.updateUrl(url);
    this.router.navigate([url]);
  }
}
