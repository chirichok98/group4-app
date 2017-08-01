import { Component, OnInit, Inject } from '@angular/core';
import { MD_DIALOG_DATA } from '@angular/material';
import { CandidateService } from '../../services/candidate.service';
import { ICandidatePreview } from '../../interfaces/ICandidatePreview';
import { IPositionPreview } from '../../interfaces/IPositionPreview';
import { PositionService } from '../../services/position.service';

@Component({
  selector: 'basket',
  templateUrl: 'basket.component.html',
  styleUrls: ['basket.component.scss'],
})
export class BasketComponent implements OnInit {
  candidates: ICandidatePreview[] = [];
  positions: IPositionPreview[] = [];
  constructor(@Inject(MD_DIALOG_DATA) public data: any,
              private cService: CandidateService,
              private pService: PositionService) {
    this.cService.getCandidatesByIds(data.canIds)
      .then((res: any) => {
        this.candidates = res;
      });
    this.pService.getPositionsByIds(data.posIds)
      .then((res: any) => {
        this.positions = res;
      });
  }

  ngOnInit() { }
}
