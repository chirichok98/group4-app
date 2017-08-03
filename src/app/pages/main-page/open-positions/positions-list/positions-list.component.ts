import { Component, EventEmitter, Output } from '@angular/core';

import { IPositionPreview } from '../../../../interfaces/IPositionPreview';
import { MyCookieService } from '../../../../services/cookie.service';
import { Router } from '@angular/router';
import { PagerService } from '../../../../services/pager.service';
import { HttpService } from '../../../../services/http.service';
import { TransferService } from '../../../../services/transfer.service';
import { SnackbarService } from '../../../../services/snackbar.service';

@Component({
  selector: 'positions-list',
  templateUrl: 'positions-list.component.html',
  styleUrls: ['positions-list.component.scss'],
})
export class PositionsListComponent {
  isSpinnerVisible: boolean = true;
  positions: IPositionPreview[];
  paramsQueue: any = [];
  searchState: boolean = false;
  public dataSubscription: any;
  constructor(private pagerService: PagerService, 
              private cookie: MyCookieService, 
              private router: Router,
              private snackService: SnackbarService,
              private httpService: HttpService,
              private transferService: TransferService) {
    this.pagerService.init(this.httpService.VAC_SEARCH, 10)
    .then(res => res.json())
      .then((positions) => {
        this.positions = positions;
        this.isSpinnerVisible = false;
      }, (error) => {
        this.snackService.showSnack('Positions wasn`t loaded!', 'ERROR');
        this.isSpinnerVisible = false;
      });
    transferService.getData().subscribe((data) => {
      console.log(data);
      this.dataSubscription = data;
      this.searchState = true;
      this.positions = [];
      this.paramsQueue = [];
      document.body.scrollTop = 0;
      this.pagerService.init(httpService.VAC_SEARCH, 10, this.dataSubscription)
      .then(res => res.json())
      .then((positions) => {
        console.log(positions);
        this.positions = positions;
        this.isSpinnerVisible = false;
      }, (error) => {
        this.snackService.showSnack('Positions wasn`t loaded!', 'ERROR');
        this.isSpinnerVisible = false;
      });
    });
  }
    
  onScroll(emmitedObject?: PagerService) {
    if (!this.searchState) {
      if (emmitedObject) {
        this.paramsQueue.push(emmitedObject.skip);
      }
      const params = this.paramsQueue.shift();
      this.pagerService.showMore(params)
      .then(res => res.json())
        .then((positions) => {
          this.positions = this.positions.concat(positions);
          this.isSpinnerVisible = false;
          if (this.paramsQueue.length) {
            this.onScroll();
          }
        }, (error) => {
          this.snackService.showSnack('Positions wasn`t loaded!', 'ERROR');
          this.isSpinnerVisible = false;
        });
    } else {
      if (emmitedObject) {
        this.paramsQueue.push(emmitedObject.skip);
      }
      const params = this.paramsQueue.shift();
      this.pagerService.showMore(params, 10, this.dataSubscription)
      .then(res => res.json())
        .then((positions) => {
          console.log(positions);
          this.positions = this.positions.concat(positions);
          this.isSpinnerVisible = false;
          if (this.paramsQueue.length) {
            this.onScroll();
          }
        }, (error) => {
          this.snackService.showSnack('Positions wasn`t loaded!', 'ERROR');
          this.isSpinnerVisible = false;
        });
    }
  }
  addVacancy(): void {
    const url: string = 'create/vacancy';
    this.cookie.updateUrl(url);
    this.router.navigate([url]);
  }
}
