import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'range-form',
  templateUrl: 'range-form.component.html',
  styleUrls: ['range-form.component.scss'],
})
export class RangeFormComponent {
  @Input() min: number;
  @Input() max: number;

  @Input() range: any;
  @Output() rangeChange: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  changeRange(value: number) {
    this.rangeChange.emit(value);
  }
}
