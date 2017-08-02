import { Component, EventEmitter, Output } from '@angular/core';

import { ICandidatePreview } from '../../../../interfaces/ICandidatePreview';
import { MyCookieService } from '../../../../services/cookie.service';
import { Router } from '@angular/router';
import { PagerService } from '../../../../services/pager.service';
import { SnackbarService } from '../../../../services/snackbar.service';
import { TransferService } from '../../../../services/transfer.service';
@Component({
  selector: 'candidates-list',
  templateUrl: 'candidates-list.component.html',
  styleUrls: ['./candidates-list.component.scss'],
})
export class CandidatesListComponent {
  isSpinnerVisible: boolean = true;
  candidates: ICandidatePreview[];
  paramsQueue: any = [];
  public dataSubscription: any;
  constructor(private pagerService: PagerService, 
              private cookie: MyCookieService,
              private router: Router,
              private snackService: SnackbarService,
              private transferService: TransferService) {
    this.dataSubscription = transferService.getData().subscribe((data) => {
      console.log(data);
    });
    this.pagerService.init('api/candidate')
      .then((candidates) => {
        this.candidates = candidates;
        this.isSpinnerVisible = false;
      }, (error) => {
        this.snackService.showSnack('Candidates wasn`t loaded!', 'ERROR');
        this.isSpinnerVisible = false;
      });
  }
  
  onScroll(emmitedObject?: PagerService) {
    if (emmitedObject) {
      this.paramsQueue.push(emmitedObject.skip);
    }
    const params = this.paramsQueue.shift();
    this.pagerService.showMore(params)
      .then((candidates) => {
        this.candidates = this.candidates.concat(candidates);
        this.isSpinnerVisible = false;
        if (this.paramsQueue.length) {
          this.onScroll();
        }
      }, (error) => {
        this.snackService.showSnack('Candidates wasn`t loaded!', 'ERROR');
        this.isSpinnerVisible = false;
      });
  }

  addCandidate(): void {
    const url: string = 'create/candidate';
    this.cookie.updateUrl(url);
    this.router.navigate([url]);
  }
}
