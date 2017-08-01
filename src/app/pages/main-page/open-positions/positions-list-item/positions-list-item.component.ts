import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { IPositionDetail } from '../../../../interfaces/IPositionDetail';
import { PositionService } from '../../../../services/position.service';

@Component({
  selector: 'positions-list-item',
  templateUrl: 'positions-list-item.component.html',
  styleUrls: ['positions-list-item.component.scss'],
})
export class PositionsListItemComponent implements OnInit {
  currentPositionId: number;
  currentPosition: Promise<IPositionDetail>;

  constructor(private route: ActivatedRoute, private pService: PositionService) {
    this.route.params.subscribe((params: ParamMap) => {
      this.currentPositionId = +params['id'];
    });
  }

  getPositionById(id): void {
    this.currentPosition = this.pService.getPositionById(id);
  }

  ngOnInit() {
    this.getPositionById(this.currentPositionId);
  }
}
