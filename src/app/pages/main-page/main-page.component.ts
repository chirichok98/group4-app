import { Component, OnInit } from '@angular/core';

import { INavbarOption } from '../../interfaces/INavbarOption';
import { MyCookieService } from '../../services/cookie.service';
import { CandidateService } from '../../services/candidate.service';
import { Router } from '@angular/router';

@Component({
  selector: 'main',
  templateUrl: 'main-page.component.html',
  styleUrls: ['main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  role: string;
  navbarConfig: any = {
    candidates: { name: 'CANDIDATES', stateName: 'candidates' },
    positions: { name: 'POSITIONS', stateName: 'vacancies' },
    notifications: { name: 'NOTIFICATIONS', stateName: 'notifications' },
    news: { name: 'NEWS', stateName: 'notifications' },
  };
  navbarOptions: INavbarOption[] = [];

  constructor(private router: Router,
              private cookie: MyCookieService,
              private cService: CandidateService) {
    this.role = this.cookie.getRole();
    this.getOptionsByRole(this.role);
  }

  getOptionsByRole(role: string): void {
    this.navbarOptions = [];
    switch (role) {
      case 'Admin': {
        this.navbarOptions.push(this.navbarConfig.candidates);
        this.navbarOptions.push(this.navbarConfig.positions);
        this.navbarOptions.push(this.navbarConfig.news);
        break;
      }
      case 'HRM': {
        this.navbarOptions.push(this.navbarConfig.candidates);
        this.navbarOptions.push(this.navbarConfig.positions);
        this.navbarOptions.push(this.navbarConfig.notifications);
        break;
      }
      case 'Tech': {
        this.navbarOptions.push(this.navbarConfig.notifications);
        break;
      }
    }
  }

  ngOnInit() { }

  showBasket() {
    const path: string = 'store';
    this.cookie.updateUrl(path);
    this.router.navigate([path]);
  }
}
