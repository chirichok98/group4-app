import { Component, OnInit } from '@angular/core';

import { IPositionPreview } from '../../../../interfaces/IPositionPreview';
import { PositionsListService } from '../../../../services/positions-list.service';

@Component({
  selector: 'positions-list',
  templateUrl: 'positions-list.component.html',
  styleUrls: ['positions-list.component.scss'],
})

export class PositionsListComponent implements OnInit {
  positions: IPositionPreview[];
  isSpinnerVisible: boolean = true;
  skip: number = 0;
  amount: number = 50;
  
  constructor(private plService: PositionsListService) {
    this.plService.getPositions(this.skip, this.amount).then((positions) => {
      this.positions = positions;
      this.isSpinnerVisible = false;
    }, (error) => {
      console.log('Positions error');
      this.isSpinnerVisible = false;
    });
  }

  ngOnInit() { }
}
