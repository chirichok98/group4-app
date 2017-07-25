import { Component, OnInit } from '@angular/core';

import { PositionsListService } from './positions-list.service';
import { IPositionPreview } from '../../../../interfaces/IPositionPreview';

@Component({
  selector: 'positions-list',
  templateUrl: 'positions-list.component.html',
  styleUrls: ['positions-list.component.scss'],
})

export class PositionsListComponent implements OnInit {
  positions: Promise<IPositionPreview[]>;

  constructor(private plService: PositionsListService) {
    this.positions = this.plService.getAllPositions();
  }

  ngOnInit() { }
}
