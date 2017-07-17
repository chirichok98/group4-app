import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { IPositionDetail } from '../../../../interfaces/IPositionDetail';

@Component({
  selector: 'positions-list-item',
  templateUrl: 'positions-list-item.component.html',
  styleUrls: ['./positions-list-item.component.scss'],
})
export class PositionsListItemComponent implements OnInit {
  positions: IPositionDetail[]; /*= [
    {
      id: 1,
      name: 'Future Factors Executive',
      // vacancyName: 'Junior DotNet Developer',
      // city: 'Minsk',
      // creationDate: new Date(2017, 0, 1),
      // imageUrl: './assets/languages-icons/dotnet-logo.png',
    },
    {
      id: 2,
      name: 'Future Factors Executive',
      // vacancy: 'Senior JS Developer',
      // city: 'Vitebsk',
      // creationDate: new Date(2017, 1, 2),
      // imageUrl: './assets/languages-icons/js-logo.png',
    },
    {
      id: 3,
      name: 'Future Factors Executive',
      // vacancy: 'Middle DotNet Developer',
      // city: 'Vilnus',
      // creationDate: new Date(2017, 3, 1),
      // imageUrl: './assets/languages-icons/dotnet-logo.png',
    },
    {
      id: 4,
      name: 'Future Factors Executive',
      // vacancy: 'Junior JS Developer',
      // city: 'San-Francisco',
      // creationDate: new Date(2017, 0, 15),
      // imageUrl: './assets/languages-icons/js-logo.png',
    },
    {
      id: 5,
      name: 'Future Factors Executive',
      // vacancy: 'Junior DotNet Developer',
      // city: 'Minsk',
      // creationDate: new Date(2017, 0, 1),
      // imageUrl: './assets/languages-icons/net2.png',
    },
    {
      id: 6,
      name: 'Future Factors Executive',
      // vacancy: 'Junior JS Developer',
      // city: 'Minsk',
      // creationDate: new Date(2017, 3, 21),
      // imageUrl: './assets/languages-icons/js2.png',
    },
  ];*/

  currentPosition: IPositionDetail;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params: ParamMap) => {
      this.currentPosition = this.positions.find(item => item.id === +params['id']);
    });
  }
}
