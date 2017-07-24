import { Component, OnInit } from '@angular/core';
declare const $;

@Component({
  selector: 'create-vacancy',
  templateUrl: 'create-vacancy.component.html',
  styleUrls: ['create-vacancy.component.scss'],
})

export class CreateVacancyComponent implements OnInit {
  constructor() { }

  ngOnInit() { 
    $(document).ready(() => {
      $('.datepicker').pickadate({
        selectMonths: true, // Creates a dropdown to control month
        selectYears: 15, // Creates a dropdown of 15 years to control year,
        today: 'Today',
        clear: 'Clear',
        close: 'Ok',
        closeOnSelect: false // Close upon selecting a date,
      });
      $('select').material_select();
    });    
  }
  
}
