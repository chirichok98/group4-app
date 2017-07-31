import { Component, OnInit } from '@angular/core';

import { INavbarOption } from '../../interfaces/INavbarOption';
import { MyCookieService } from '../../services/cookie.service';

@Component({
  selector: 'main',
  templateUrl: 'main-page.component.html',
  styleUrls: ['main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  navbarConfig: any = {
    candidates: { name: 'CANDIDATES', stateName: 'candidates' },
    positions: { name: 'POSITIONS', stateName: 'vacancies' },
    notifications: { name: 'NOTIFICATIONS', stateName: 'notifications' },
    news: { name: 'NEWS', stateName: 'news' },
  };
  navbarOptions: INavbarOption[] = [];

  constructor(private cookie: MyCookieService) {
    const role: string = this.cookie.getRole();
    this.getOptionsByRole(role);
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
}
