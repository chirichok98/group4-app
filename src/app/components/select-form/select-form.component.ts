import { Component, OnInit, Input, EventEmitter, Output, DoCheck } from '@angular/core';
import { IGeneral } from '../../interfaces/IGeneral';

declare const $;

@Component({
  selector: 'select-form',
  templateUrl: 'select-form.component.html',
  styleUrls: ['select-form.component.scss'],
})
export class SelectFormComponent {
  @Input() array: any;
  @Input() placeholder: string;

  @Input() result: number;
  @Output() resultChange: EventEmitter<number> = new EventEmitter<number>();

  constructor() {
  }

  onChange(value: any) {
    this.resultChange.emit(value);
  }

  ngDoCheck() {
  }
}
