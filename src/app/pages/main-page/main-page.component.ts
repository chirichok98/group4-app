import { Component, OnInit } from '@angular/core';

import { INavbarOption } from '../../interfaces/INavbarOption';
import { MyCookieService } from '../../services/cookie.service';
import { CandidateService } from '../../services/candidate.service';
import { Router } from '@angular/router';

declare const $;

@Component({
  selector: 'main',
  templateUrl: 'main-page.component.html',
  styleUrls: ['main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  role: number;
  navbarConfig: any = {
    candidates: { name: 'candidates', stateName: 'candidates' },
    positions: { name: 'positions', stateName: 'vacancies' },
    notifications: { name: 'notifications', stateName: 'notifications' },
    news: { name: 'news', stateName: 'notifications' },
  };
  navbarOptions: INavbarOption[] = [];

  constructor(private router: Router,
              private cookie: MyCookieService,
              private cService: CandidateService) {
    this.role = this.cookie.getRole();
    this.getOptionsByRole(this.role);
    this.initBackToTop();
    
  }

  initBackToTop(): void {
    $(document).ready(() => {
      $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
          $('.scrollToTop').fadeIn();
        } else {
          $('.scrollToTop').fadeOut();
        }
      });

      $('.scrollToTop').click(() => {
        $('html, body').animate({ scrollTop: 0 }, 800);
        return false;
      });
    });
  }

  getOptionsByRole(role: number): void {
    this.navbarOptions = [];
    switch (role) {
      case 3: {
        this.navbarOptions.push(this.navbarConfig.candidates);
        this.navbarOptions.push(this.navbarConfig.positions);
        this.navbarOptions.push(this.navbarConfig.news);
        break;
      }
      case 2: {
        this.navbarOptions.push(this.navbarConfig.candidates);
        this.navbarOptions.push(this.navbarConfig.positions);
        this.navbarOptions.push(this.navbarConfig.notifications);
        break;
      }
      case 1: {
        this.navbarOptions.push(this.navbarConfig.notifications);
        break;
      }
    }
    console.log(this.navbarOptions);
  }

  ngOnInit() { }

  showBasket() {
    const path: string = 'store';
    this.cookie.updateUrl(path);
    this.router.navigate([path]);
  }
}
