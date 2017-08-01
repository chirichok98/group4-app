import { Component, EventEmitter, Output } from '@angular/core';

import { IPositionPreview } from '../../../../interfaces/IPositionPreview';
import { MyCookieService } from '../../../../services/cookie.service';
import { Router } from '@angular/router';
import { PagerService } from '../../../../services/pager.service';
import { HttpService } from '../../../../services/http.service';
import { SnackbarService } from '../../../../services/snackbar.service';

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
              private cookie: MyCookieService, 
              private router: Router,
              private snackService: SnackbarService) {
    this.pagerService.init('vacancy')
      .then((positions) => {
        this.positions = positions;
        this.isSpinnerVisible = false;
      }, (error) => {
        this.snackService.showSnack('Positions wasn`t loaded!', 'ERROR');
        this.isSpinnerVisible = false;
      });
  }
    
  onScroll(pager?: PagerService) {
    if (pager) {
      this.paramsQueue.push(pager.skip);
    }
    const params = this.paramsQueue.shift();
    this.pagerService.more(params)
      .then((positions) => {
        this.positions = this.positions.concat(positions);
        this.isSpinnerVisible = false;
        if (this.paramsQueue.length) {
          this.onScroll();
        }
      }, (error) => {
        this.snackService.showSnack('Positions wasn`t loaded!', 'ERROR');
        this.isSpinnerVisible = false;
      });
  }
  addVacancy(): void {
    const url: string = 'create/vacancy';
    this.cookie.updateUrl(url);
    this.router.navigate([url]);
  }
}
