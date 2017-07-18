import { Component, OnInit, Input } from '@angular/core';
import { ICandidateDetail } from '../../interfaces/ICandidateDetail';

@Component({
  selector: 'candidate-detail-card',
  templateUrl: 'candidate-detail-card.component.html',
  styleUrls: ['candidate-detail-card.component.scss'],
})
export class CandidateDetailComponent implements OnInit {
  @Input() candidate: ICandidateDetail;
  curCandidate: ICandidateDetail;
  constructor() { }

  ngOnInit() { 
    this.curCandidate = this.candidate;
  }
}
