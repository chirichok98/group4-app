import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { IPositionDetail } from '../../../../interfaces/IPositionDetail';
import { PositionsListItemService } from '../../../../services/positions-list-item.service';

@Component({
  selector: 'positions-list-item',
  templateUrl: 'positions-list-item.component.html',
  styleUrls: ['positions-list-item.component.scss'],
})
export class PositionsListItemComponent implements OnInit {
  currentPositionId: number;
  currentPosition: Promise<IPositionDetail>;

  constructor(private route: ActivatedRoute, private pliService: PositionsListItemService) {
    this.route.params.subscribe((params: ParamMap) => {
      this.currentPositionId = +params['id'];
    });
  }

  getPositionById(id): void {
    this.currentPosition = this.pliService.getPositionById(id);
  }

  ngOnInit() {
    this.getPositionById(this.currentPositionId);
  }
}
