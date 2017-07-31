import { Component, OnInit } from '@angular/core';

import { IPositionPreview } from '../../../../interfaces/IPositionPreview';
import { PositionsListService } from '../../../../services/positions-list.service';
import { MyCookieService } from '../../../../services/cookie.service';
import { Router } from '@angular/router';

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
  
  constructor(private plService: PositionsListService,
              private cookie: MyCookieService, 
              private router: Router) {
    this.plService.getPositions(this.skip, this.amount).then((positions) => {
      this.positions = positions;
      this.isSpinnerVisible = false;
    }, (error) => {
      console.log('Positions error');
      this.isSpinnerVisible = false;
    });
  }

  ngOnInit() { }
  
  addVacancy(): void {
    const url: string = 'create/vacancy';
    this.cookie.updateUrl(url);
    this.router.navigate([url]);
  }
}
