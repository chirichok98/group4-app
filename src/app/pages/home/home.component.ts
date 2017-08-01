import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { IDescribeBlock } from '../../interfaces/IDescribeBlock';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  descriptions: Promise<IDescribeBlock[]>;

  constructor(private router: Router, private hService: HomeService) {
    this.descriptions = this.hService.getAllDescriptions();
  }
}
