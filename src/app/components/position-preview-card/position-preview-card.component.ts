import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { IPositionPreview } from '../../interfaces/IPositionPreview';

@Component({
  selector: 'position-preview-card',
  templateUrl: 'position-preview-card.component.html',
  styleUrls: ['position-preview-card.component.scss'],
})
export class PositionPreviewComponent {
  @Input() positionItem: IPositionPreview;
  currentItem: IPositionPreview;

  constructor(private router: Router) { }

  ngOnInit() {
    this.currentItem = this.positionItem;
  }

  goToDetailView() {
    this.router.navigate([`main-page/vacancies`, this.currentItem.id]);
  }
}
