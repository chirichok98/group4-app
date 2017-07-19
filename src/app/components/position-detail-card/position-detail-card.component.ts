import { Component, OnInit, Input } from '@angular/core';

import { IPositionDetail } from '../../interfaces/IPositionDetail';

@Component({
  selector: 'position-detail-card',
  templateUrl: 'position-detail-card.component.html',
  styleUrls: ['position-detail-card.component.scss'],
})

export class PositionDetailComponent implements OnInit {
  @Input() position: Promise<IPositionDetail>;

  constructor() { }

  ngOnInit() {
  }
}
