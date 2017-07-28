import { Component, Input, Output, EventEmitter, DoCheck } from '@angular/core';

declare const $;

@Component({
  selector: 'datepicker-form',
  templateUrl: 'datepicker-form.component.html',
  styleUrls: ['datepicker-form.component.scss'],
})
export class DatepickerFormComponent implements DoCheck {
  @Input() placeholder: string;

  @Input() date: any;
  @Output() dateChange: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
    $('.datepicker').pickadate({
      selectMonths: true, // Creates a dropdown to control month
      selectYears: 30, // Creates a dropdown of 15 years to control year,
      today: 'Today',
      clear: 'Clear',
      close: 'Ok',
    });
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
    // console.log(this.date);
    // this.dateChange.emit(this.date);
    // console.log('emit');
  }
}
