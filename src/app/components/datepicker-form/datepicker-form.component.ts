import { Component, Input, Output, EventEmitter, DoCheck } from '@angular/core';

declare const $;

@Component({
  selector: 'datepicker-form',
  templateUrl: 'datepicker-form.component.html',
  styleUrls: ['datepicker-form.component.scss'],
})
export class DatepickerFormComponent {
  @Input() placeholder: string;
  
  minDate = new Date(2010, 0, 1);
  maxDate = new Date(2040, 0, 1);

  @Input() date: Date;
  @Output() dateChange: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  onChange(date: any) {
    this.dateChange.emit(date);
    console.log(date);
  }
}
