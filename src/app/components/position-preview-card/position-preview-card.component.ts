import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { IPositionPreview } from '../../interfaces/IPositionPreview';

@Component({
  selector: 'position-preview-card',
  templateUrl: 'position-preview-card.component.html',
  styleUrls: ['position-preview-card.component.scss'],
})
export class PositionPreviewComponent {
  @Input() position: IPositionPreview;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToDetailView() {
    console.log('gdsgd');
    this.router.navigate([`main-page/vacancies`, this.position.id]);
  }
}
