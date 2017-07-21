import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { CreateCandidateService } from './create-candidate.service';

declare const $;

@Component({
  selector: 'create-candidate',
  templateUrl: 'create-candidate.component.html',
  styleUrls: ['create-candidate.component.scss'],
})
export class CreateCandidateComponent implements OnInit {
  @ViewChild('jobs') jobs: ElementRef;
  canInfo: any = {};
  contact: any = {};
  // jobs: any = '';

  constructor(private ccService: CreateCandidateService) { }

  ngOnInit() {
    $(document).ready(() => {
      $('select').material_select();
    });

    // $('.datepicker').pickadate({
    //   selectMonths: true, // Creates a dropdown to control month
    //   selectYears: 15, // Creates a dropdown of 15 years to control year,
    //   today: 'Today',
    //   clear: 'Clear',
    //   close: 'Ok',
    // });
  }

  // addPrevJob() {
  //   this.jobs.nativeElement.appendChild(`<prev-job-input-form></prev-job-input-form>`);
  // }

  addCandidate(): void {

    this.canInfo.contact = this.contact;
    console.log(this.canInfo);
    console.log(this.contact);

    // this.ccService.addCandidate(this.canInfo)
    //   .then((can: any) => {
    //     console.log(can);
    //   });
  }
  toNumber() {
    console.log('hi');
  }
}
