import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SnackbarService } from '../../../services/snackbar.service';
import { PositionService } from '../../../services/position.service';

@Component({
  selector: 'create-position',
  templateUrl: 'create-position.component.html',
  styleUrls: ['create-position.component.scss'],
})

export class CreatePositionComponent implements OnInit {
  position: any = {
    secondarySkills: [],
    primarySkill: {},
  };

  constructor(private router: Router, 
              private pService: PositionService,
              private snackService: SnackbarService) { }

  ngOnInit() { }

  addPosition(): void {
    this.sendPostRequest(this.position);
  }

  sendPostRequest(position: any): void {
    this.pService.addPosition(position)
      .then((vac: any) => {
        console.log(vac);
        this.router.navigate(['main-page/positions']);
        this.snackService.showSnack('Position successfully added!','SUCCESS');
      }, (err: any) => {
        this.snackService.showSnack('Positions wasn`t created','ERROR');
      });
  }
}
