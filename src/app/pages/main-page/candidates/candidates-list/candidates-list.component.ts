import { Component, EventEmitter, Output, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { ICandidatePreview } from '../../../../interfaces/ICandidatePreview';
import { MyCookieService } from '../../../../services/cookie.service';
import { Router } from '@angular/router';
import { PagerService } from '../../../../services/pager.service';
import { SnackbarService } from '../../../../services/snackbar.service';
import { TransferService } from '../../../../services/transfer.service';
import { HttpService } from '../../../../services/http.service';
declare const $;
@Component({
  selector: 'candidates-list',
  templateUrl: 'candidates-list.component.html',
  styleUrls: ['./candidates-list.component.scss'],
})
export class CandidatesListComponent {
  isSpinnerVisible: boolean = true;
  private candidates: ICandidatePreview[];
  private paramsQueue: any = [];
  public searchSubscription: any;
  public sortSubscription: any;
  constructor(private pagerService: PagerService,
              private cookie: MyCookieService,
              private router: Router,
              private snackService: SnackbarService,
              private transferService: TransferService,
              private httpService: HttpService,
              @Inject(DOCUMENT) private document: Document) {
    this.init(httpService.CAN_SEARCH);
    setTimeout(() => {
      $('.search-button').trigger('click');
    }, 700);
    transferService.getData().subscribe((data) => {
      console.log(data);
      this.candidates = [];
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
      
      this.init(httpService.CAN_SEARCH, 20, this.searchSubscription, this.sortSubscription);
    });
  }
  
  private onScroll(emmitedObject?: PagerService) {
    if (emmitedObject) {
      this.paramsQueue.push(emmitedObject.skip);
    }
    const params = this.paramsQueue.shift();
    this.showMore(params, 20, this.searchSubscription, this.sortSubscription);
  }

  private init(url: string, amount?: number, searchData?: any, sortData?: any) {
    this.pagerService.init(url, amount, searchData, sortData)
      .then(res => res.json())
      .then((candidates) => {
        console.log(candidates);
        this.candidates = candidates;
        this.isSpinnerVisible = false;
      }, (error) => {
        this.snackService.showSnack('Candidates wasn`t loaded!', 'ERROR');
        this.isSpinnerVisible = false;
      });
  }

  private showMore(params: any, amount: number, searchData?: any, sortData?: any): void {
    this.pagerService.showMore(params, amount, searchData, sortData)
      .then(res => res.json())
      .then((candidates) => {
        console.log(candidates);
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
