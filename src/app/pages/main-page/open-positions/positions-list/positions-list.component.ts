import { Component, OnInit } from '@angular/core';

import { PositionsListService } from './positions-list.service';
import { IPositionPreview } from '../../../../interfaces/IPositionPreview';

@Component({
  selector: 'positions-list',
  templateUrl: 'positions-list.component.html',
  styleUrls: ['positions-list.component.scss'],
})

export class PositionsListComponent implements OnInit {
  positions: IPositionPreview[];
  isSpinnerVisible: boolean = true;

  constructor(private plService: PositionsListService) {
    this.plService.getAllPositions().then((positions) => {
      this.positions = positions;
      this.isSpinnerVisible = false;
    }, (error) => {
      console.log('Positions error');
      this.isSpinnerVisible = false;
    });
  }

  ngOnInit() {
  }
}
