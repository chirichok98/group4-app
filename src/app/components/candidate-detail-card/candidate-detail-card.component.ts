import { Component, OnInit, Input } from '@angular/core';
import { ICandidatePreview } from '../../interfaces/ICandidatePreview';

@Component({
  selector: 'candidate-detail-card',
  templateUrl: 'candidate-detail-card.component.html',
  styleUrls: ['candidate-detail-card.component.scss'],
})
export class CandidateDetailComponent implements OnInit {
  @Input() candidate: ICandidatePreview;
  curCandidate: ICandidatePreview;
  constructor() { }

  ngOnInit() { 
    this.curCandidate = this.candidate;
  }
}
