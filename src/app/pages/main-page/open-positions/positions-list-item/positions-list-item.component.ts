import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { IPositionDetail } from '../../../../interfaces/IPositionDetail';
import { PositionsListItemService } from './positions-list-item.service';

@Component({
  selector: 'positions-list-item',
  templateUrl: 'positions-list-item.component.html',
  styleUrls: ['./positions-list-item.component.scss'],
})
export class PositionsListItemComponent implements OnInit {
  position: IPositionDetail;

  constructor(private pliService: PositionsListItemService) { }

  getPositionById() {
    this.pliService.getPositionById()
      .then(pos => this.position = pos);
  }

  ngOnInit() {
    this.getPositionById();
  }
}
