import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';

declare const $;

@Component({
  selector: 'datepicker-form',
  templateUrl: 'datepicker-form.component.html',
  styleUrls: ['datepicker-form.component.scss'],
})
export class DatepickerFormComponent implements OnInit {
  @ViewChild('date') date: ElementRef;
  @Input() placeholder: string;

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
}
