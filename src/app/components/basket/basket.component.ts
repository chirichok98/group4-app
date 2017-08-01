import { Component, OnInit, Inject } from '@angular/core';
import { CandidateService } from '../../services/candidate.service';
import { ICandidatePreview } from '../../interfaces/ICandidatePreview';
import { IPositionPreview } from '../../interfaces/IPositionPreview';
import { PositionService } from '../../services/position.service';
import { MyCookieService } from '../../services/cookie.service';
import { Router } from '@angular/router';

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
              private cookie: MyCookieService,
              private router: Router) {
    this.canIds = this.cookie.getCandidates();
    this.vacIds = this.cookie.getVacancies();
    this.cService.getCandidatesByIds(this.canIds)
      .then((res: any) => {
        this.candidates = res;
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
    if (!this.isChecked(this.canIds, this.vacIds)) return;
    this.cService.assignVacancies(this.canIds, this.vacIds)
      .then((res: any) => {
        if (res.status === 200) {
          this.positions = [];
          this.candidates = [];
          this.cookie.removeBasket();
          const url: string = 'main-page';
          this.cookie.updateUrl(url);
          this.router.navigate([url]);
        }
      }, (error: any) => {
        console.log(error);
      });
  }

  isChecked(can: number[], vac: number[]): boolean {
    if (!can.length || !vac.length) {
      console.log('Nothing to assign');
      return false;
    }
    return true;
  }
}
