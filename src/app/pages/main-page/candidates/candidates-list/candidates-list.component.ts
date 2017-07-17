import { Component, OnInit } from '@angular/core';

// tslint:disable-next-line:max-line-length
import { ICandidatePreview } from '../../../../components/candidate-preview-card/candidate-preview-card.component';

@Component({
  selector: 'candidates-list',
  templateUrl: 'candidates-list.component.html',
  styleUrls: ['./candidates-list.component.scss'],
})
export class CandidatesListComponent implements OnInit {
  candidates: ICandidatePreview[] = [
    {
      id: 1,
      firstName: 'Vladislav',
      lastName: 'Popov',
      email: 'vladislav@mail.ru',
      phoneNumber: '+375291548745',
      imageUrl: './assets/blank-avatar.png',
    },
    {
      id: 2,
      firstName: 'Nikita',
      lastName: 'Nikitin',
      email: 'vldgfsd@mail.ru',
      phoneNumber: '+375291124745',
      imageUrl: './assets/blank-avatar.png',
    },
    {
      id: 3,
      firstName: 'Artem',
      lastName: 'Krotov',
      email: 'artem@mail.ru',
      phoneNumber: '+375257848745',
      imageUrl: './assets/blank-avatar.png',
    },
    {
      id: 4,
      firstName: 'Stanislav',
      lastName: 'Popov',
      email: 'stanislav@mail.ru',
      phoneNumber: '+375257845145',
      imageUrl: './assets/blank-avatar.png',
    },
    {
      id: 5,
      firstName: 'Aleksei',
      lastName: 'Pronin',
      email: 'aleksei@mail.ru',
      phoneNumber: '+375254788745',
      imageUrl: './assets/blank-avatar.png',
    },
    {
      id: 6,
      firstName: 'Vladislav',
      lastName: 'Popov',
      email: 'vladislav@mail.ru',
      phoneNumber: '+375291548745',
      imageUrl: './assets/blank-avatar.png',
    },
  ];
  
  constructor() { }

  ngOnInit() { }
}
