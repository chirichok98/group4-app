import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SnackbarService } from '../../../services/snackbar.service';
import { PositionService } from '../../../services/position.service';

@Component({
  selector: 'create-vacancy',
  templateUrl: 'create-vacancy.component.html',
  styleUrls: ['create-vacancy.component.scss'],
})

export class CreateVacancyComponent implements OnInit {
  vacancy: any = {
    secondarySkills: [],
    primarySkill: {},
  };

  constructor(private router: Router, 
              private pService: PositionService,
              private snackService: SnackbarService) { }

  ngOnInit() { }

  addVacancy(): void {
    this.sendPostRequest(this.vacancy);
  }

  sendPostRequest(vacancy: any): void {
    this.pService.addVacancy(vacancy)
      .then((vac: any) => {
        this.router.navigate(['main-page/vacancies']);
        this.snackService.showSnack('Position successfully added!','SUCCESS');
      }, (err: any) => {
        this.snackService.showSnack('Positions wasn`t created','ERROR');
      });
  }
}
