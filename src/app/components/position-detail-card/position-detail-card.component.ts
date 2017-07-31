import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { IPositionDetail } from '../../interfaces/IPositionDetail';
import { MyCookieService } from '../../services/cookie.service';

@Component({
  selector: 'position-detail-card',
  templateUrl: 'position-detail-card.component.html',
  styleUrls: ['position-detail-card.component.scss'],
})

export class PositionDetailComponent implements OnInit {
  @Input() position: IPositionDetail;

  constructor(private router: Router, private cookie: MyCookieService) { }

  ngOnInit() {
  }

  goToEditForm() {
    const url: string = `edit/vacancy/${this.position.id}`;
    this.cookie.updateUrl(url);
    this.router.navigate([url]);
  }
}
