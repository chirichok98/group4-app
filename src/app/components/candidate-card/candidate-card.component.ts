import { Component, Input, OnInit } from '@angular/core';

export interface ICandidatePreview {
  name: string;
  email: string;
  phoneNumber: string;
  imageUrl: string;
}

@Component({
  selector: 'candidate-card',
  templateUrl: './candidate-card.component.html',
  styleUrls: ['./candidate-card.component.scss'],
})
export class CandidateCardComponent implements OnInit{
  @Input() candidateItem: ICandidatePreview;
  curCandidate: ICandidatePreview;

  ngOnInit() {
    this.curCandidate = this.candidateItem;
  }
}
