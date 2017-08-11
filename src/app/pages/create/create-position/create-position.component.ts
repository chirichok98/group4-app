import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SnackbarService } from '../../../services/snackbar.service';
import { PositionService } from '../../../services/position.service';
import { MyCookieService } from '../../../services/cookie.service';

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
              private snackService: SnackbarService,
              private cookie: MyCookieService) { }

  ngOnInit() { }

  addPosition(): void {
    const pos: any = Object.assign({}, this.position);
    this.checkEmptyFields(pos);
    
    this.sendPostRequest(pos);
  }

  checkEmptyFields(obj: any): void {
    if (!Object.keys(obj.primarySkill).length) {
      delete obj.primarySkill;
    }
    if (!obj.secondarySkills.length) {
      delete obj.secondarySkills;
    }
  }

  sendPostRequest(pos: any): void {
    this.pService.addPosition(pos)
      .then(res => res.json())
      .then((vac: any) => {
        const url: string = `main-page/positions/${vac}`;
        this.cookie.updateUrl(url);
        this.router.navigate([url]);
        this.snackService.showSnack('Position successfully added!','SUCCESS');
      }, (err: any) => {
        this.snackService.showSnack('Positions wasn`t created','ERROR');
      });
  }
}
