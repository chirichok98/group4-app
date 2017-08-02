import { Component, OnInit, Inject } from '@angular/core';
import { MD_DIALOG_DATA } from '@angular/material';
import { DictionariesService } from '../../services/dictionaries.service';
import { IGeneral } from '../../interfaces/IGeneral';
import { CandidateService } from '../../services/candidate.service';
import { MyCookieService } from '../../services/cookie.service';
import { SnackbarService } from '../../services/snackbar.service';
import { Router } from '@angular/router';

@Component({
  selector: 'modal',
  templateUrl: 'modal.component.html',
  styleUrls: ['modal.component.scss'],
})
export class ModalComponent implements OnInit {
  cities: IGeneral[] = [];
  hrs: IGeneral[] = [];
  techs: IGeneral[] = [];
  skills: IGeneral[] = [];
  type: string;

  interview: any = {};

  constructor(@Inject(MD_DIALOG_DATA) public data: any,
              private cService: CandidateService,
              private dService: DictionariesService,
              private snackService: SnackbarService,
              private router: Router) {
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

  sendInterview() {
    this.interview.candidate = this.data.id;
    const date: Date = new Date(this.interview.date);
    this.interview.endDate = new Date(date.setHours(date.getHours() + 24));
    console.log(this.interview);
    this.cService.addInterview(this.type, this.interview)
      .then((res: any) => {
        this.snackService.showSnack('Interview successfully assigned', 'SUCCESS');
        this.router.navigate(['main-page']);
      }, (error: any) => {
        this.snackService.showSnack('Troubles with assigning','ERROR');
      });
  }
}
