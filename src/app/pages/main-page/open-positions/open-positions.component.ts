import { Component, OnInit } from '@angular/core';

import { IPositionPreviewItem } from '../../../components/position-card/position-card.component';

@Component({
  selector: 'open-positions',
  templateUrl: './open-positions.component.html',
  styleUrls: ['./open-positions.component.scss'],
})

export class OpenPositionsComponent implements OnInit {
  positions: IPositionPreviewItem[] = [
    {
      vacancy: 'Junior DotNet Developer',
      city: 'Minsk',
      creationDate: new Date(2017, 0, 1),
      imageUrl: './assets/languages-icons/dotnet-logo.png',
    },
    {
      vacancy: 'Senior JS Developer',
      city: 'Vitebsk',
      creationDate: new Date(2017, 1, 2),
      imageUrl: './assets/languages-icons/js-logo.png',
    },
    {
      vacancy: 'Middle DotNet Developer',
      city: 'Vilnus',
      creationDate: new Date(2017, 3, 1),
      imageUrl: './assets/languages-icons/dotnet-logo.png',
    },
    {
      vacancy: 'Junior JS Developer',
      city: 'San-Francisco',
      creationDate: new Date(2017, 0, 15),
      imageUrl: './assets/languages-icons/js-logo.png',
    },
    {
      vacancy: 'Junior DotNet Developer',
      city: 'Minsk',
      creationDate: new Date(2017, 0, 1),
      imageUrl: './assets/languages-icons/dotnet-logo.png',
    },
    {
      vacancy: 'Junior JS Developer',
      city: 'Minsk',
      creationDate: new Date(2017, 3, 21),
      imageUrl: './assets/languages-icons/js-logo.png',
    },
  ];

  constructor() { }

  ngOnInit() { }
}
