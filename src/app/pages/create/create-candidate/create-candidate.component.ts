import { Component, OnInit } from '@angular/core';

import { CreateCandidateService } from './create-candidate.service';

declare const $;

@Component({
  selector: 'create-candidate',
  templateUrl: 'create-candidate.component.html',
  styleUrls: ['create-candidate.component.scss'],
})
export class CreateCandidateComponent implements OnInit {
  canInfo: any = {
   
  };
  test: string = 'fdsbvdfv';

  constructor(private ccService: CreateCandidateService) { }

  ngOnInit() {
    $(document).ready(() => {
      $('select').material_select();
    });

    /*$('.datepicker').pickadate({
      selectMonths: true, // Creates a dropdown to control month
      selectYears: 15, // Creates a dropdown of 15 years to control year,
      today: 'Today',
      clear: 'Clear',
      close: 'Ok',
    });*/
  }

  addCandidate(): void {
    console.log(this.canInfo);

    // this.ccService.addCandidate(this.canInfo)
    //   .then((can: any) => {
    //     console.log(can);
    //   });
  }
}
