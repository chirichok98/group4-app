import { Component, Input } from '@angular/core';
import { MdDialog } from '@angular/material';
import { Router } from '@angular/router';
import { ICandidateDetail } from '../../interfaces/ICandidateDetail';
import { MyCookieService } from '../../services/cookie.service';
import { DownloadService } from '../../services/download.service';
// tslint:disable-next-line:max-line-length
import { AssignInterviewFormComponent } from '../assign-interview-form/assign-interview-form.component';
import { IPositionPreview } from '../../interfaces/IPositionPreview';
import { CandidateService } from '../../services/candidate.service';

@Component({
  selector: 'candidate-detail-card',
  templateUrl: 'candidate-detail-card.component.html',
  styleUrls: ['candidate-detail-card.component.scss'],
})
export class CandidateDetailComponent {
  @Input() candidate: ICandidateDetail;
  possibleVacancies: IPositionPreview[] = [];
  coefficient: number;
  skip: number;
  amount: number;
  hasNoVac: boolean = false;

  constructor(private router: Router,
              private cookie: MyCookieService,
              private downloadService: DownloadService,
              private cService: CandidateService,
              public dialog: MdDialog) {
    this.skip = 0;
    this.amount = 5;
    this.coefficient = 50;
  }

  goToEditForm() {
    const url: string = `edit/candidate/${this.candidate.id}`;
    this.cookie.updateUrl(url);
    this.router.navigate([url]);
  }

  addInterview(): void {
    this.dialog.open(AssignInterviewFormComponent, {
      data: { id: this.candidate.id },
    });
  }

  nextPage() {
    this.skip += this.amount;
    this.autoSearch(this.skip, this.amount, true);
  }

  autoSearch(skip: number, amount: number, notFirst: boolean): void {
    if (!notFirst) this.possibleVacancies = [];
    const obj: any = {
      skip: skip || this.skip,
      amount: amount || this.amount,
      coefficient: this.coefficient,
      candidate: this.candidate.id,
    };
    this.cService.autoSearch(obj)
      // .then(res => res.json())
      .then(vac => {
        console.log(vac);
        if (vac.length < this.amount) this.hasNoVac = true;
        this.possibleVacancies = this.possibleVacancies.concat(vac);
        console.log(this.possibleVacancies);
      });
  }

  download() {
    alert('qq');
    // this.downloadService.downloadFile();
  }
}
