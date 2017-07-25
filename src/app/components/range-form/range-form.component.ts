import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'range-form',
  templateUrl: 'range-form.component.html',
  styleUrls: ['range-form.component.scss'],
})
export class RangeFormComponent implements OnInit {
  @ViewChild('range') range: ElementRef;
  @Input() min: number;
  @Input() max: number;
  @Input() placeholder: string;
  constructor() { }

  ngOnInit() { }
}
