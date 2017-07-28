import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CreateVacancyService } from '../../../services/create-vacancy.service';

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

  constructor(private router: Router, private cvService: CreateVacancyService) { }

  ngOnInit() { }

  addVacancy(): void {
    this.sendPostRequest(this.vacancy);
    console.log(this.vacancy);
  }

  sendPostRequest(vacancy: any): void {
    this.cvService.addVacancy(vacancy)
      .then((vac: any) => {
        this.router.navigate(['main-page/vacancies']);
      }, (err: any) => {
        console.log('Error with vacancy creation');
      });
  }
}
