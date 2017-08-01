import { Component, OnInit, Inject } from '@angular/core';
import { CandidateService } from '../../services/candidate.service';
import { ICandidatePreview } from '../../interfaces/ICandidatePreview';
import { IPositionPreview } from '../../interfaces/IPositionPreview';
import { PositionService } from '../../services/position.service';
import { MyCookieService } from '../../services/cookie.service';

@Component({
  selector: 'basket',
  templateUrl: 'basket.component.html',
  styleUrls: ['basket.component.scss'],
})
export class BasketComponent implements OnInit {
  candidates: ICandidatePreview[] = [];
  positions: IPositionPreview[] = [];
  canIds: number[];
  vacIds: number[];

  constructor(private cService: CandidateService,
              private pService: PositionService,
              private cookie: MyCookieService) {
    this.canIds = this.cookie.getCandidates();
    this.vacIds = this.cookie.getVacancies();
    console.log(this.canIds);
    console.log(this.vacIds);
    this.cService.getCandidatesByIds(this.canIds)
      .then((res: any) => {
        this.candidates = res;
        console.log(res);
      });
    this.pService.getPositionsByIds(this.vacIds)
      .then((res: any) => {
        this.positions = res;
      });
  }

  ngOnInit() { }

  deleteCandidate(index: any): void {
    this.candidates.splice(index, 1);
    this.canIds.splice(index, 1);
    this.cookie.removeIdFromCandidate(index);
  }

  deletePosition(index: any): void {
    this.positions.splice(index, 1);
    this.vacIds.splice(index, 1);
    this.cookie.removeIdFromVacancies(index);
  }

  assign(): void {
    this.cService.assignVacancies(this.canIds, this.vacIds)
      .then((res: any) => {
        console.log(res);
      });
  }
}
