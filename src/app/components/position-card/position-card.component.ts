import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export interface IPositionPreviewItem {
  id: number;
  vacancy: string;
  city: string;
  creationDate: Date;
  imageUrl: string;
}

@Component({
  selector: 'position-card',
  templateUrl: './position-card.component.html',
  styleUrls: ['./position-card.component.scss'],
})
export class PositionPreviewComponent {
  @Input() positionItem: IPositionPreviewItem;
  currentItem: IPositionPreviewItem;

  constructor(private router: Router) { }

  ngOnInit() {
    this.currentItem = this.positionItem;
  }

  goToDetailView() {
    this.router.navigate([`/vacancies`, this.currentItem.id]);
  }
}
