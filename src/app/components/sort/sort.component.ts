import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'sort-panel',
  templateUrl: 'sort.component.html',
  styleUrls: ['sort.component.scss'],
})

export class SortComponent implements OnInit {
  @Input() isCandidate: boolean;
  @Input() isVacancy: boolean;
  sort: any = { };
  
  constructor() { }
  
  ngOnInit() { }
}
