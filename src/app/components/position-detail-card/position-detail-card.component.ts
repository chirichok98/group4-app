import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { IPositionDetail } from '../../interfaces/IPositionDetail';
import { MyCookieService } from '../../services/cookie.service';
import { ICandidatePreview } from '../../interfaces/ICandidatePreview';
import { PositionService } from '../../services/position.service';

@Component({
  selector: 'position-detail-card',
  templateUrl: 'position-detail-card.component.html',
  styleUrls: ['position-detail-card.component.scss'],
})

export class PositionDetailComponent implements OnInit {
  @Input() position: IPositionDetail;
  possibleCandidates: ICandidatePreview[] = [];
  coefficient: number;
  skip: number;
  amount: number;
  hasNoCan: boolean = false;
  isSearchShown: boolean = false;

  constructor(private router: Router, 
              private cookie: MyCookieService, 
              private vService: PositionService) { 
    this.skip = 0;
    this.amount = 5;
    this.coefficient = 50;
  }

  ngOnInit() {
  }

  goToEditForm() {
    const url: string = `edit/vacancy/${this.position.id}`;
    this.cookie.updateUrl(url);
    this.router.navigate([url]);
  }

  
  nextPage() {
    this.skip += this.amount;
    this.autoSearch(this.skip, this.amount, true);
  }

  autoSearch(skip: number, amount: number, notFirst: boolean): void {
    if (!notFirst) this.possibleCandidates = [];
    const obj: any = {
      skip: skip || this.skip,
      amount: amount || this.amount,
      coefficient: this.coefficient,
      vacancy: this.position.id,
    };
    this.vService.autoSearch(obj)
      // .then(res => res.json())
      .then(can => {
        console.log(can);
        if (can.length < this.amount) this.hasNoCan = true;
        this.possibleCandidates = this.possibleCandidates.concat(can);
        console.log(this.possibleCandidates);
      });
  }
}
