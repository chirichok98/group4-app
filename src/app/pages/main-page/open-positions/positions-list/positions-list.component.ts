import { Component } from '@angular/core';

import { IPositionPreview } from '../../../../interfaces/IPositionPreview';
import { PositionsListService } from '../../../../services/positions-list.service';
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
  constructor(private pagerService: PagerService, private httpService : HttpService) {
    this.pagerService.init(httpService.VAC)
      .then((positions) => {
        console.log(positions);
        this.positions = positions;
        this.isSpinnerVisible = false;
      }, (error) => {
        console.log('Positions error');
        this.isSpinnerVisible = false;
      });
  }
  onScroll(pager: PagerService) {
    console.log(pager.skip);
    this.pagerService.more(pager.skip)
      .then((positions) => {
        console.log(positions);
        this.positions = this.positions.concat(positions);
        this.isSpinnerVisible = false;
      }, (error) => {
        console.log('Positions error');
        this.isSpinnerVisible = false;
      });
  }
}
