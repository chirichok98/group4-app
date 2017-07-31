import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ICandidatePreview } from '../../interfaces/ICandidatePreview';
import { MyCookieService } from '../../services/cookie.service';

@Component({
  selector: 'candidate-card',
  templateUrl: 'candidate-preview-card.component.html',
  styleUrls: ['candidate-preview-card.component.scss'],
})
export class CandidatePreviewComponent implements OnInit {
  @Input() candidate: ICandidatePreview;

  constructor(private router: Router, private cookie: MyCookieService) { }

  ngOnInit() {
  }

  goToDetailView() {
    const url: string = `main-page/candidates/${this.candidate.id}`;
    this.cookie.updateUrl(url);
    this.router.navigate([url]);
  }
}
