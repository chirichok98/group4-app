import { Component, EventEmitter, Output } from '@angular/core';

import { IPositionPreview } from '../../../../interfaces/IPositionPreview';
import { MyCookieService } from '../../../../services/cookie.service';
import { Router } from '@angular/router';
import { PagerService } from '../../../../services/pager.service';
import { HttpService } from '../../../../services/http.service';
import { TransferService } from '../../../../services/transfer.service';
import { SnackbarService } from '../../../../services/snackbar.service';
declare const $;

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
  public searchSubscription: any;
  public sortSubscription: any;
  constructor(private pagerService: PagerService,
              private cookie: MyCookieService,
              private router: Router,
              private snackService: SnackbarService,
              private httpService: HttpService,
              private transferService: TransferService) {
    setTimeout(() => {
      $('.search-button').trigger('click');
    }, 0);
    transferService.getData().subscribe((data) => {
      this.positions = [];
      this.paramsQueue = [];
      document.body.scrollTop = 0;
      switch (data.type) {
        case 'search': {
          this.searchSubscription = data.options;
          break;
        }
        case 'sort': {
          this.sortSubscription = data.options;
          break;
        }
      }
      this.init(httpService.VAC_SEARCH, 20, this.searchSubscription, this.sortSubscription);
    });
  }

  onScroll(emmitedObject?: PagerService) {
    if (emmitedObject) {
      this.paramsQueue.push(emmitedObject.skip);
    }
    const params = this.paramsQueue.shift();
    this.showMore(params, 20, this.searchSubscription, this.sortSubscription);
  }

  private init(url: string, amount?: number, searchData?: any, sortData?: any) {
    this.pagerService.init(url, amount, searchData, sortData)
      .then(res => res.json())
      .then((positions) => {
        this.positions = positions;
        this.isSpinnerVisible = false;
      }, (error) => {
        this.snackService.showSnack('positions wasn`t loaded!', 'ERROR');
        this.isSpinnerVisible = false;
      });
  }

  private showMore(params: any, amount: number, searchData?: any, sortData?: any): void {
    this.pagerService.showMore(params, amount, searchData, sortData)
      .then(res => res.json())
      .then((positions) => {
        this.positions = this.positions.concat(positions);
        this.isSpinnerVisible = false;
        if (this.paramsQueue.length) {
          this.onScroll();
        }
      }, (error) => {
        this.snackService.showSnack('positions wasn`t loaded!', 'ERROR');
        this.isSpinnerVisible = false;
      });
  }

  addPosition(): void {
    const url: string = 'create/position';
    this.cookie.updateUrl(url);
    this.router.navigate([url]);
  }
}
