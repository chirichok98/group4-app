import { Component, EventEmitter, Output } from '@angular/core';

import { IPositionPreview } from '../../../../interfaces/IPositionPreview';
import { MyCookieService } from '../../../../services/cookie.service';
import { Router } from '@angular/router';
import { PagerService } from '../../../../services/pager.service';
import { HttpService } from '../../../../services/http.service';

@Component({
  selector: 'positions-list',
  templateUrl: 'positions-list.component.html',
  styleUrls: ['positions-list.component.scss'],
})
export class PositionsListComponent {
  isSpinnerVisible: boolean = true;
  positions: IPositionPreview[];
  paramsQueue: any = [];
  constructor(private pagerService: PagerService, 
              private httpService: HttpService,
              private cookie: MyCookieService, 
              private router: Router) {
    this.pagerService.init(httpService.VAC)
      .then((positions) => {
        this.positions = positions;
        this.isSpinnerVisible = false;
      }, (error) => {
        console.log('Positions error');
        this.isSpinnerVisible = false;
      });
  }
  onScroll(pager?: PagerService) {
    if (pager) {
      this.paramsQueue.push(pager.skip);
    }
<<<<<<< HEAD
    const params = this.paramsQueue.shift();
    console.log(pager.skip);
=======
    const params = this.paramsQueue.reverse().pop();
    this.paramsQueue.reverse();
>>>>>>> d988d54ccb68e7deccb5b929b8b4321796e1fbf3
    this.pagerService.more(params)
      .then((positions) => {
        console.log(positions);
        this.positions = this.positions.concat(positions);
        this.isSpinnerVisible = false;
        if (this.paramsQueue.length) {
          this.onScroll();
        }
      }, (error) => {
        console.log('Positions error');
        this.isSpinnerVisible = false;
      });
  }
  addVacancy(): void {
    const url: string = 'create/vacancy';
    this.cookie.updateUrl(url);
    this.router.navigate([url]);
  }
}
