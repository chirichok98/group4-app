import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { MyCookieService } from '../../../services/cookie.service';
import { PositionService } from '../../../services/position.service';
import { SnackbarService } from '../../../services/snackbar.service';

@Component({
  selector: 'edit-position',
  templateUrl: 'edit-position.component.html',
  styleUrls: ['edit-position.component.scss'],
})
export class EditPositionComponent implements OnInit {
  isLoaded: boolean = false;
  positionId: number;
  position: any = {
    primarySkill: {},
    secondarySkills: [],
  };

  constructor(private route: ActivatedRoute,
              private router: Router,
              private cookie: MyCookieService,
              private pService: PositionService,
              private snackService: SnackbarService) {
    this.route.params.subscribe((params: ParamMap) => {
      this.positionId = +params['id'];
    });
    this.getPositionById(this.positionId);
  }

  getPositionById(id) {
    this.pService.getPositionById(id)
      .then((res: any) => {
        this.position = res;
        this.isLoaded = true;
      }, (error: any) => {
        this.snackService.showSnack('Position wasn`t loaded!', 'ERROR');
        this.isLoaded = true;
      });
  }

  ngOnInit() {
  }

  checkEmptyFields(obj: any): void {
    obj.primarySkill = this.configureSkill(obj.primarySkill);
    obj.secondarySkills = obj.secondarySkills.map(i => this.configureSkill(i));
    console.log(obj);

    Object.keys(obj).forEach((i: any) => {
      if (!obj[i] || (Array.isArray(obj[i]) && !obj[i].length)) {
        delete obj[i];
      }
    });

    delete obj.hrm;
  }

  configureSkill(skill): any {
    if (!skill.id || !skill.level) return null;
    const res: any = {
      id: skill.id,
      level: skill.level,
    };
    return res;
  }

  editPosition() {
    const vac: any = Object.assign({}, this.position);
    this.checkEmptyFields(vac);

    this.sendRequest(vac);
  }

  sendRequest(obj: any): void {
    this.pService.updatePosition(obj)
      .then((res: any) => {
        const url: string = `main-page/positions/${this.positionId}`;
        this.cookie.updateUrl(url);
        this.router.navigate([url]);
        this.snackService.showSnack('Position was successfully edited!', 'SUCCESS');
      }, (error: any) => {
        this.snackService.showSnack('Position wasn`t edited!', 'ERROR');
      });
  }
}
