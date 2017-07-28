import { Component, Input, Output, EventEmitter, DoCheck } from '@angular/core';

declare const $;

@Component({
  selector: 'datepicker-form',
  templateUrl: 'datepicker-form.component.html',
  styleUrls: ['datepicker-form.component.scss'],
})
export class DatepickerFormComponent implements DoCheck {
  @Input() placeholder: string;

  minDate = new Date(2000, 0, 1);
  maxDate = new Date(2020, 0, 1);
    value = new Date(2020, 0, 1);

  date = new Date(2000, 0, 1);
  @Output() dateChange: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  // parseDate(dateString: string): Date {
  //   console.log('here');
  //   if (dateString) {
  //     this.dateChange.emit(this.date);
  //     return new Date(dateString);
  //   } else {
  //     return null;
  //   }
  // }

  ngDoCheck() {
    // console.log(this.value);
    // this.dateChange.emit(this.date);
    // console.log('emit');
  }

  dateChanged(date) {
    console.log(date);
  }
}
