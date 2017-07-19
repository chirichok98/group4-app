import { Injectable } from '@angular/core';

import { IPositionPreview } from '../../../../interfaces/IPositionPreview';

const positions: IPositionPreview[] = [
  {
    id: 1,
    projectName: 'Future Factors Executive',
    vacancyName: 'Junior DotNet Developer',
    city: 'Minsk',
    creationDate: new Date(2017, 0, 1),
    imageUrl: './assets/languages-icons/dotnet_roma.png',
  },
  {
    id: 2,
    projectName: 'Future Factors Executive',
    vacancyName: 'Senior JS Developer',
    city: 'Vitebsk',
    creationDate: new Date(2017, 1, 2),
    imageUrl: './assets/languages-icons/js_n2.png',
  },
  {
    id: 3,
    projectName: 'Future Factors Executive',
    vacancyName: 'Middle DotNet Developer',
    city: 'Vilnus',
    creationDate: new Date(2017, 3, 1),
    imageUrl: './assets/languages-icons/dotnet_roma.png',
  },
  {
    id: 4,
    projectName: 'Future Factors Executive',
    vacancyName: 'Junior JS Developer',
    city: 'San-Francisco',
    creationDate: new Date(2017, 0, 15),
    imageUrl: './assets/languages-icons/js_n2.png',
  },
  {
    id: 5,
    projectName: 'Future Factors Executive',
    vacancyName: 'Junior DotNet Developer',
    city: 'Minsk',
    creationDate: new Date(2017, 0, 1),
    imageUrl: './assets/languages-icons/dotnet_roma.png',
  },
  {
    id: 6,
    projectName: 'Future Factors Executive',
    vacancyName: 'Junior JS Developer',
    city: 'Minsk',
    creationDate: new Date(2017, 3, 21),
    imageUrl: './assets/languages-icons/js_n2.png',
  },
];

@Injectable()
export class PositionsListService {
  constructor() { }

  getAllPositions(): Promise<IPositionPreview[]> {
    return Promise.resolve(positions);
  }

  getAllPositionsSlowly(): Promise<IPositionPreview[]> {
    return new Promise((res: any) => setTimeout(() => res(this.getAllPositions()), 1000));
  }
}
