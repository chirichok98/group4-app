import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export interface ICandidatePreview {
  name: string;
  email: string;
  phoneNumber: string;
  imageUrl: string;
}

@Component({
  selector: 'candidate-card',
  templateUrl: 'candidate-preview-card.component.html',
  styleUrls: ['candidate-preview-card.component.scss'],
})
export class CandidateCardComponent implements OnInit {
  @Input() candidateItem: ICandidatePreview;
  curCandidate: ICandidatePreview;

  constructor(private router: Router) { }

  ngOnInit() {
    this.curCandidate = this.candidateItem;
  }

  goToDetailView() {
    this.router.navigate(['main-page/candidates', this.curCandidate.name]);
  }
}
