import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { IPositionDetail } from '../../../../interfaces/IPositionDetail';
import { PositionsListItemService } from './positions-list-item.service';

@Component({
  selector: 'positions-list-item',
  templateUrl: 'positions-list-item.component.html',
  styleUrls: ['positions-list-item.component.scss'],
})
export class PositionsListItemComponent implements OnInit {
  currentPositionId: number;
  position: Promise<IPositionDetail>;

  constructor(private route: ActivatedRoute, private pliService: PositionsListItemService) {
    this.route.params.subscribe((params: ParamMap) => {
      this.currentPositionId = +params['id'];
    });
  }

  getPositionById(id): void {
    this.position = this.pliService.getPositionById(id);
  }

  ngOnInit() {
    this.getPositionById(this.currentPositionId);    
    
  }
}
