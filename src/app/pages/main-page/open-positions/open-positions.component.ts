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
      id: 1,
      vacancy: 'Junior DotNet Developer',
      city: 'Minsk',
      creationDate: new Date(2017, 0, 1),
      imageUrl: './assets/languages-icons/net.png',
    },
    {
      id: 2,
      vacancy: 'Senior JS Developer',
      city: 'Vitebsk',
      creationDate: new Date(2017, 1, 2),
      imageUrl: './assets/languages-icons/js3.png',
    },
    {
      id: 3,
      vacancy: 'Middle DotNet Developer',
      city: 'Vilnus',
      creationDate: new Date(2017, 3, 1),
      imageUrl: './assets/languages-icons/js6.png',
    },
    {
      id: 4,
      vacancy: 'Junior JS Developer',
      city: 'San-Francisco',
      creationDate: new Date(2017, 0, 15),
      imageUrl: './assets/languages-icons/js4.png',
    },
    {
      id: 5,
      vacancy: 'Junior DotNet Developer',
      city: 'Minsk',
      creationDate: new Date(2017, 0, 1),
      imageUrl: './assets/languages-icons/net2.png',
    },
    {
      id: 6,
      vacancy: 'Junior JS Developer',
      city: 'Minsk',
      creationDate: new Date(2017, 3, 21),
      imageUrl: './assets/languages-icons/js5.png',
    },
    {
      vacancy: 'Junior JS Developer',
      city: 'Minsk',
      creationDate: new Date(2017, 3, 17),
      imageUrl: './assets/languages-icons/js7.png',
    },
    {
      vacancy: 'Junior JS Developer',
      city: 'Minsk',
      creationDate: new Date(2017, 3, 14),
      imageUrl: './assets/languages-icons/js8.png',
    },
    {
      vacancy: 'Junior JS Developer',
      city: 'Minsk',
      creationDate: new Date(2017, 3, 13),
      imageUrl: './assets/languages-icons/js9.png',
    },
    {
      vacancy: 'Junior .NET Developer',
      city: 'Minsk',
      creationDate: new Date(2017, 3, 13),
      imageUrl: './assets/languages-icons/net3.png',
    },
    {
      vacancy: 'Junior .NET Developer',
      city: 'Minsk',
      creationDate: new Date(2017, 3, 13),
      imageUrl: './assets/languages-icons/net4.png',
    },
  ];

  constructor() { }

  ngOnInit() { }
}
