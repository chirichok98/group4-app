import { Component, Input, OnInit } from '@angular/core';

export interface IPositionPreviewItem {
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

  constructor() { }

  ngOnInit() {
    this.currentItem = this.positionItem;
  }
}
