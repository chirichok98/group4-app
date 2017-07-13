import { Component } from '@angular/core';

export interface IPositionItem {
  img: string;
  text: string;
}

@Component({
  selector: 'position',
  templateUrl: './position.component.html',
  styleUrls: ['./position.component.scss'],
})
export class PositionComponent {
  positionItem: IPositionItem = {
    img: "../../../assets/languages-icons/js-logo.png",
    text: 'JavaScript developer (Middle)',
  }
}