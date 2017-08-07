import { Component, OnInit, Inject } from '@angular/core';
import { MD_DIALOG_DATA, MdDialogRef } from '@angular/material';
import { Router } from '@angular/router';

import { DictionariesService } from '../../services/dictionaries.service';
import { IGeneral } from '../../interfaces/IGeneral';
import { CandidateService } from '../../services/candidate.service';
import { MyCookieService } from '../../services/cookie.service';
import { SnackbarService } from '../../services/snackbar.service';

@Component({
  selector: 'assign-interview-form',
  templateUrl: 'assign-interview-form.component.html',
  styleUrls: ['assign-interview-form.component.scss'],
})
export class AssignInterviewFormComponent implements OnInit {
  cities: IGeneral[] = [];
  hrs: IGeneral[] = [];
  techs: IGeneral[] = [];
  skills: IGeneral[] = [];
  type: string = 'general';

  time: any = {};
  date: any;

  interview: any = {};

  constructor( @Inject(MD_DIALOG_DATA) public data: any,
               private cService: CandidateService,
               private dService: DictionariesService,
               private snackService: SnackbarService,
               private router: Router,
               public dialogRef: MdDialogRef<AssignInterviewFormComponent>) {
    this.dService.getCities().then((cities) => {
      this.cities = cities;
    });
    this.dService.getHRs().then((hrs) => {
      this.hrs = hrs;
    });
    this.dService.getTechs().then((techs) => {
      this.techs = techs;
    });
    this.dService.getSkills().then((skills) => {
      this.skills = skills;
    });
  }

  ngOnInit() { }

  getMinutes(str: string): number {
    if (str) {
      const index: number = str.indexOf(':');
      const hours: number = +str.slice(0, index);
      const mins: number = +str.slice(index + 1);
      return hours * 60 + mins;
    }
    return 0;
  }

  setDate(): void {
    if (this.date) {
      const date: Date = new Date(this.date);
      const from: number = date.setMinutes(date.getMinutes() + this.getMinutes(this.time.from));
      const to: number = date.setMinutes(date.getMinutes() +
        (this.getMinutes(this.time.to) ? this.getMinutes(this.time.to) : 120));
      this.interview.date = new Date(from);
      this.interview.endDate = new Date(to);
    }
  }

  sendInterview() {
    this.setDate();
    this.interview.candidate = this.data.id;
    this.cService.addInterview(this.type, this.interview)
      .then((res: any) => {
        this.snackService.showSnack('Interview successfully assigned', 'SUCCESS');
        this.router.navigate(['main-page']);
        this.dialogRef.close();
      }, (error: any) => {
        this.snackService.showSnack('Troubles with assigning', 'ERROR');
      });
  }
}
