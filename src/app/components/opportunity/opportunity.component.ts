import { Component, Input, OnInit } from '@angular/core';

export interface IOpportunity {
  title: string;
  content: string;
  imageUrl: string; 
}

@Component({
  selector: 'opportunity',
  templateUrl: './opportunity.component.html',
  styleUrls: ['./opportunity.component.scss'],
})
export class OpportunityComponent implements OnInit {
  @Input() opportunity: IOpportunity;
  loadedOpp: IOpportunity;

  constructor() { }

  ngOnInit() {
    this.loadedOpp = this.opportunity;
  }
}
