import { Component, OnInit, Input, DoCheck } from '@angular/core';
import { Router } from '@angular/router';

import { IPositionDetail } from '../../interfaces/IPositionDetail';
import { MyCookieService } from '../../services/cookie.service';
import { ICandidatePreview } from '../../interfaces/ICandidatePreview';
import { PositionService } from '../../services/position.service';
import { CandidateService } from '../../services/candidate.service';
import { SnackbarService } from '../../services/snackbar.service';

@Component({
  selector: 'position-detail-card',
  templateUrl: 'position-detail-card.component.html',
  styleUrls: ['position-detail-card.component.scss'],
})

export class PositionDetailComponent implements DoCheck {
  @Input() position: IPositionDetail;
  possibleCandidates: ICandidatePreview[] = [];
  coefficient: number;
  skip: number;
  amount: number;
  hasNoCan: boolean = false;
  isAdded: boolean = false;

  constructor(private router: Router,
              private cookie: MyCookieService,
              private vService: PositionService,
              private snackService: SnackbarService) {
    this.skip = 0;
    this.amount = 5;
    this.coefficient = 50;
  }

  ngDoCheck() {
    const id: number[] = this.cookie.getVacancies();
    if (this.position && id.length && id.includes(this.position.id)) {
      this.isAdded = true;
    }
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
      .then((can: any) => {
        if (can.length < this.amount) this.hasNoCan = true;
        this.possibleCandidates = this.possibleCandidates.concat(can);
      });
  }

  assignCandidate(value: number): void {
    this.vService.assignCandidates([value], [this.position.id])
      .then(() => {
        const ids: number[] = this.position.candidates.map(i => i.id);
        if (!ids.includes(value)) {
          this.position.candidates.push(this.possibleCandidates.find(i => i.id === value));
          this.snackService.showSnack('Successfully assigned', 'SUCCESS');
          return;
        }
        this.snackService.showSnack('Candidate was assigned earlier', 'WARNING');
      }, (err: any) => {
        this.snackService.showSnack('Error with assigning', 'ERROR');
      });
  }

  removeCandidate(id: number, index: number): void {
    const obj: any = {
      candidateId: id,
      vacancyId: this.position.id,
    };
    this.vService.removeCandidate(obj)
      .then((res) => {
        this.position.candidates.splice(index, 1);
        this.snackService.showSnack('Candidate successfully removed', 'SUCCESS');
      },
      () => this.snackService.showSnack('Troubles with removing', 'ERROR'));
  }

  addToBasket(event: any): void {
    if (event.stopPropagation) {
      event.stopPropagation();
    }

    if (this.cookie.addVacancy(this.position.id)) {
      this.isAdded = true;
      this.snackService.showSnack('Succesfully added to basket!', 'SUCCESS');
    } else {
      const index: number = this.cookie.getVacancies()
        .findIndex(i => i === this.position.id);
      this.cookie.removeIdFromVacancies(index);
      this.isAdded = false;
      this.snackService.showSnack('Position removed successfully!', 'DELETE');
    }
  }
}
