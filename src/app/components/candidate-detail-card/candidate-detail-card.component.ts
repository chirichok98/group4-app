import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ICandidateDetail } from '../../interfaces/ICandidateDetail';

@Component({
  selector: 'candidate-detail-card',
  templateUrl: 'candidate-detail-card.component.html',
  styleUrls: ['candidate-detail-card.component.scss'],
})
export class CandidateDetailComponent implements OnInit {
  @Input() candidate: ICandidateDetail;
  constructor() { }

  ngOnInit() { 
  }
}
