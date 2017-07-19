import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ICandidatePreview } from '../../interfaces/ICandidatePreview';

@Component({
  selector: 'candidate-card',
  templateUrl: 'candidate-preview-card.component.html',
  styleUrls: ['candidate-preview-card.component.scss'],
})
export class CandidatePreviewComponent implements OnInit {
  @Input() candidate: ICandidatePreview;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToDetailView() {
    this.router.navigate(['main-page/candidates', this.candidate.id]);
  }
}
