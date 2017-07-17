import { Component, OnInit } from '@angular/core';

import { INavbarOption } from '../../interfaces/INavbarOption';

@Component({
  selector: 'main',
  templateUrl: 'main-page.component.html',
  styleUrls: ['main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  navbarOptionsConfig: INavbarOption[] = [
    { name: 'CANDIDATES', stateName: 'candidates' },
    { name: 'OPEN POSITIONS', stateName: 'vacancies' },
    { name: 'NOTIFICATIONS', stateName: 'notifications' },
  ];

  constructor() { }

  ngOnInit() { }
}
