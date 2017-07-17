import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export interface IPositionPreviewItem {
  id: number;
  projectName: string;
  vacancy: string;
  city: string;
  creationDate: Date;
  imageUrl: string;
}

@Component({
  selector: 'position-preview-card',
  templateUrl: 'position-preview-card.component.html',
  styleUrls: ['position-preview-card.component.scss'],
})
export class PositionPreviewComponent {
  @Input() positionItem: IPositionPreviewItem;
  currentItem: IPositionPreviewItem;

  constructor(private router: Router) { }

  ngOnInit() {
    this.currentItem = this.positionItem;
  }

  goToDetailView() {
    this.router.navigate([`main-page/vacancies`, this.currentItem.id]);
  }
}
