import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ICandidatePreview } from '../../interfaces/ICandidatePreview';
import { MyCookieService } from '../../services/cookie.service';
import { SnackbarService } from '../../services/snackbar.service';

@Component({
  selector: 'candidate-card',
  templateUrl: 'candidate-preview-card.component.html',
  styleUrls: ['candidate-preview-card.component.scss'],
})
export class CandidatePreviewComponent implements OnInit {
  @Input() candidate: ICandidatePreview;
  @Input() showBasket: boolean = true;

  constructor(private router: Router,
              private cookie: MyCookieService,
              private snackService: SnackbarService) { }

  ngOnInit() {
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
      this.snackService.showSnack('Succesfully added to basket!','SUCCESS');
    } else {
      this.snackService.showSnack('This candidate was added earlier!','WARNING');
    }
  }
}
