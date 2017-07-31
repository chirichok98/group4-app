import { Component } from '@angular/core';

import { IPositionPreview } from '../../../../interfaces/IPositionPreview';
import { PositionsListService } from '../../../../services/positions-list.service';
import { PagerService } from '../../../../services/pager.service';

@Component({
  selector: 'positions-list',
  templateUrl: 'positions-list.component.html',
  styleUrls: ['positions-list.component.scss'],
})

export class PositionsListComponent {

  isSpinnerVisible: boolean = true;
  positions: IPositionPreview[];
  constructor(private pagerService: PagerService) {
    this.pagerService.init('vacancy')
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
        this.positions.push(positions);
        this.isSpinnerVisible = false;
      }, (error) => {
        console.log('Positions error');
        this.isSpinnerVisible = false;
      });
  }
}