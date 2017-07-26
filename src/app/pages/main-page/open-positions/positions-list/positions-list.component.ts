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

  constructor(private plService: PositionsListService) {
    this.plService.getAllPositions().then((positions) => {
      this.positions = positions;
      this.isSpinnerVisible = false;
    }, (error) => {
      console.log('Positions error');
      this.isSpinnerVisible = false;
    });
  }

  ngOnInit() { }
}
