import { Component, OnInit } from '@angular/core';

import { IPositionPreviewItem } from '../../../../components/position-card/position-card.component';
import { PositionsListService } from './positions-list.service';

@Component({
  selector: 'positions-list',
  templateUrl: 'positions-list.component.html',
  styleUrls: ['positions-list.component.scss'],
})

export class PositionsListComponent implements OnInit {
  positions: IPositionPreviewItem[];

  constructor(private plService: PositionsListService) { }

  getAllPositions(): void {
    this.plService.getAllPositions()
      .then(pos => this.positions = pos);
  }

  ngOnInit() {
    this.getAllPositions();
  }
}
