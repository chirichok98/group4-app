import { Component, Input, DoCheck } from '@angular/core';
import { Router } from '@angular/router';

import { ICandidatePreview } from '../../interfaces/ICandidatePreview';
import { MyCookieService } from '../../services/cookie.service';
import { SnackbarService } from '../../services/snackbar.service';

@Component({
  selector: 'candidate-card',
  templateUrl: 'candidate-preview-card.component.html',
  styleUrls: ['candidate-preview-card.component.scss'],
})
export class CandidatePreviewComponent implements DoCheck {
  @Input() candidate: ICandidatePreview;
  @Input() showBasket: boolean = true;

  isAdded: boolean = false;

  constructor(private router: Router,
              private cookie: MyCookieService,
              private snackService: SnackbarService) { }

  ngDoCheck() {
    const id: number[] = this.cookie.getCandidates();
    if (this.candidate && id.length && id.includes(this.candidate.id)) {
      this.isAdded = true;
    }
  }

  goToDetailView() {
    const url: string = `main-page/candidates/${this.candidate.id}`;
    this.cookie.updateUrl(url);
    this.router.navigate([url]);
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
}
