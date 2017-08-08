import { Component, Input, DoCheck } from '@angular/core';
import { MdDialog } from '@angular/material';
import { Router } from '@angular/router';
import { ICandidateDetail } from '../../interfaces/ICandidateDetail';
import { MyCookieService } from '../../services/cookie.service';
import { DownloadService } from '../../services/download.service';
// tslint:disable-next-line:max-line-length
import { AssignInterviewFormComponent } from '../assign-interview-form/assign-interview-form.component';
import { IPositionPreview } from '../../interfaces/IPositionPreview';
import { CandidateService } from '../../services/candidate.service';
import { SnackbarService } from '../../services/snackbar.service';

@Component({
  selector: 'candidate-detail-card',
  templateUrl: 'candidate-detail-card.component.html',
  styleUrls: ['candidate-detail-card.component.scss'],
})
export class CandidateDetailComponent implements DoCheck {
  @Input() candidate: ICandidateDetail;
  possiblePositions: IPositionPreview[] = [];
  coefficient: number;
  skip: number;
  amount: number;
  hasNoVac: boolean = false;
  isAdded: boolean = false;

  constructor(private router: Router,
              private cookie: MyCookieService,
              private downloadService: DownloadService,
              private cService: CandidateService,
              private snackService: SnackbarService,
              public dialog: MdDialog) {
    this.skip = 0;
    this.amount = 5;
    this.coefficient = 50;
  }

  ngDoCheck() {
    const id: number[] = this.cookie.getCandidates();
    if (this.candidate && id.length && id.includes(this.candidate.id)) {
      this.isAdded = true;
    }
  }

  goToEditForm(): void {
    const url: string = `edit/candidate/${this.candidate.id}`;
    this.cookie.updateUrl(url);
    this.router.navigate([url]);
  }

  assignInterview(): void {
    const data: any = {};
    if (this.candidate) {
      data.id = this.candidate.id;
      if (this.candidate.contact) {
        data.email = this.candidate.contact.email;
      }
    }
    this.dialog.open(AssignInterviewFormComponent, { data });
  }

  nextPage(): void {
    this.skip += this.amount;
    this.autoSearch(this.skip, this.amount, true);
  }

  autoSearch(skip: number, amount: number, notFirst: boolean): void {
    if (!notFirst) this.possiblePositions = [];
    const obj: any = {
      skip: skip || this.skip,
      amount: amount || this.amount,
      coefficient: this.coefficient,
      candidate: this.candidate.id,
    };
    this.cService.autoSearch(obj)
      .then((vac: any) => {
        if (vac.length < this.amount) this.hasNoVac = true;
        this.possiblePositions = this.possiblePositions.concat(vac);
      });
  }

  assignPosition(value: number): void {
    this.cService.assignPositions([this.candidate.id], [value])
      .then((res: any) => {
        const ids: number[] = this.candidate.vacancies.map(i => i.id);
        if (!ids.includes(value)) {
          this.candidate.vacancies.push(this.possiblePositions.find(i => i.id === value));
          this.snackService.showSnack('Successfully assigned', 'SUCCESS');
          return;
        }
        this.snackService.showSnack('Position was assigned earlier', 'WARNING');
      }, (err: any) => {
        this.snackService.showSnack('Error with assigning', 'ERROR');
      });
  }

  addToBasket(event: any): void {
    if (event.stopPropagation) {
      event.stopPropagation();
    }
    if (this.cookie.addCandidate(this.candidate.id)) {
      this.isAdded = true;
      this.snackService.showSnack('Succesfully added to basket!', 'SUCCESS');
    } else {
      const index: number = this.cookie.getCandidates().findIndex(i => i === this.candidate.id);
      this.cookie.removeIdFromCandidate(index);
      this.isAdded = false;
      this.snackService.showSnack('This candidate was successfully deleted!', 'DELETE');
    }
  }

  removePosition(id: number, index: number): void {
    const obj: any = {
      candidateId: this.candidate.id,
      positionId: id,
    };
    this.cService.removePosition(obj)
      .then((res) => {
        this.candidate.vacancies.splice(index, 1);
        this.snackService.showSnack('Position successfully removed', 'SUCCESS');
      },
      () => this.snackService.showSnack('Troubles with removing', 'ERROR'));
  }

  getCV(): void {
    this.cService.downloadCV(this.candidate.id)
      .then(res => console.log(res), err => console.log(err));
  }

  download(): void {
    alert('qq');
    // this.downloadService.downloadFile();
  }
}
