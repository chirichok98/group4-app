import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { IPositionPreview } from '../../interfaces/IPositionPreview';
import { MyCookieService } from '../../services/cookie.service';
import { SnackbarService } from '../../services/snackbar.service';

@Component({
  selector: 'position-preview-mini',
  templateUrl: 'position-preview-mini.component.html',
  styleUrls: ['position-preview-mini.component.scss'],
})
export class PositionPreviewCardMiniComponent {
  @Input() position: IPositionPreview;

  constructor(private router: Router, 
              private cookie: MyCookieService,
              private snackService: SnackbarService) { }

  ngDoCheck() {
  }

  goToDetailView() {
    this.router.navigate([`main-page/vacancies`, this.position.id]);
  }
}
