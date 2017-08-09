import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'interview-result',
  templateUrl: 'interview-result.component.html',
  styleUrls: ['interview-result.component.scss'],
})

export class InterviewResultComponent implements OnInit {
  @Input() interview: any = {};
  @Input() type: string;
  
  constructor() { }

  ngOnInit() { }
}
