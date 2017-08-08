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
export class EditVacancyComponent implements OnInit {
  isLoaded: boolean = false;
  positionId: number;
  position: any;

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

  configureSkill(skill): any {
    const res: any = {
      id: skill.id,
      level: skill.level,
    };
    return res;
  }

  editVacancy() {
    this.position.candidates = this.position.candidates.map(i => i.id);
    this.position.primarySkill = this.configureSkill(this.position.primarySkill);
    this.position.secondarySkills = this.position.secondarySkills
      .map((i: any) => this.configureSkill(i));
    delete this.position.hrm;
    this.pService.updatePosition(this.position)
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
