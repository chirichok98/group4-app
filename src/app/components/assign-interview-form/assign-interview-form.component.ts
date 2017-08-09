import { Component, Inject, DoCheck } from '@angular/core';
import { MD_DIALOG_DATA, MdDialogRef } from '@angular/material';
import { Router } from '@angular/router';

import { DictionariesService } from '../../services/dictionaries.service';
import { IGeneral } from '../../interfaces/IGeneral';
import { MyCookieService } from '../../services/cookie.service';
import { SnackbarService } from '../../services/snackbar.service';
import { InterviewService } from '../../services/interview.service';
import { IUserPreview } from '../../interfaces/IUserPreview';

@Component({
  selector: 'assign-interview-form',
  templateUrl: 'assign-interview-form.component.html',
  styleUrls: ['assign-interview-form.component.scss'],
})
export class AssignInterviewFormComponent implements DoCheck {
  cities: IGeneral[] = [];
  hrs: IUserPreview[] = [];
  techs: IUserPreview[] = [];
  skills: IGeneral[] = [];
  type: string = 'general';

  time: any = {};
  date: any;

  interview: any = {};
  interviewer: any = {
    body: ``,
  };
  candidate: any = {
    body: ``,
  };

  constructor(@Inject(MD_DIALOG_DATA) public data: any,
    private iService: InterviewService,
    private dService: DictionariesService,
    private snackService: SnackbarService,
    private router: Router,
    public dialogRef: MdDialogRef<AssignInterviewFormComponent>) {
    this.dService.getCities().then((cities) => {
      this.cities = cities;
    });
    this.dService.getHRs().then((hrs) => {
      this.hrs = hrs;
      console.log(hrs);
    });
    this.dService.getTechs().then((techs) => {
      this.techs = techs;
      console.log(techs);
    });
    this.dService.getSkills().then((skills) => {
      this.skills = skills;

    });

    this.candidate.recipient = this.data.email;
  }

  ngDoCheck() {
    let name: string = 'None';
    if (this.type === 'general' && this.hrs.length && this.interview.interviewer) {
      const hrs: any = this.hrs.find(i => i.id === this.interview.interviewer);
      if (hrs) {
        name = hrs.name;
        this.interviewer.recipient = hrs.email;
      }
    }
    if (this.type === 'tech' && this.techs.length && this.interview.interviewer) {
      const techs: any = this.techs.find(i => i.id === this.interview.interviewer);
      if (techs) {
        name = techs.name;
        this.interviewer.recipient = techs.email;
      }
    }
    this.candidate.subject = `New interview with ${name}`;
    this.interviewer.subject = `New interview with ${this.data.candidateName}`;
  }

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
    this.iService.assignInterview(this.type, this.interview)
      .then((res: any) => {
        this.snackService.showSnack('Interview successfully assigned', 'SUCCESS');
        this.sendEmail(this.candidate, 'candidate');
        this.sendEmail(this.interviewer, 'interviewer');
        this.setCalendar();
        this.router.navigate(['main-page']);
        this.dialogRef.close();
      }, (error: any) => {
        this.snackService.showSnack('Troubles with assigning', 'ERROR');
      });
  }

  sendEmail(obj: any, reciever: string): void {
    console.log(obj);
    this.iService.sendEmail(this.candidate)
      .then((res: any) => {
        console.log(res);
        this.snackService.showSnack(`Email to ${reciever} sended`, 'SUCCESS');
      }, (err: any) => {
        console.log(err);
        this.snackService.showSnack(`Email to ${reciever} wasn't sended`, 'ERROR');
      });
  }

  setCalendar(): void {
    const city: string = this.cities.find(i => i.id === this.interview.city).name;
    const obj: any = {
      techEmail: this.interviewer.recipient,
      candidateEmail: this.data.email,
      startTime: this.interview.date,
      endTime: this.interview.endDate,
      location: city,
      description: `Interview with candidate at ${this.interview.date}`,
      summary: `Interview with candidate at ${this.interview.date}`,
    };
    this.iService.setCalendarEvent(obj)
      .then((res: any) => {
        console.log(res);
        this.snackService.showSnack(`Event in calendar added`, 'SUCCESS');
      }, (err: any) => {
        console.log(err);
        this.snackService.showSnack(`Event in calendar wasn't added`, 'ERROR');
      });
  }
}
