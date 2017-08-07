import { Component, Input, DoCheck } from '@angular/core';
import { Router } from '@angular/router';

import { ICandidatePreview } from '../../interfaces/ICandidatePreview';
import { MyCookieService } from '../../services/cookie.service';
import { SnackbarService } from '../../services/snackbar.service';

@Component({
  selector: 'candidate-preview-mini',
  templateUrl: 'candidate-preview-mini.component.html',
  styleUrls: ['candidate-preview-mini.component.scss'],
})
export class CandidatePreviewCardMiniComponent implements DoCheck {
  @Input() candidate: ICandidatePreview;

  constructor(private router: Router,
              private cookie: MyCookieService) { }

  ngDoCheck() {
  }

  goToDetailView() {
    const url: string = `main-page/candidates/${this.candidate.id}`;
    this.cookie.updateUrl(url);
    this.router.navigate([url]);
  }
}
