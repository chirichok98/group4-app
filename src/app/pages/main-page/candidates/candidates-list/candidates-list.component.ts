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
      name: 'Vladislav Popov',
      email: 'vladislav@mail.ru',
      phoneNumber: '+375291548745',
      imageUrl: './assets/blank-avatar.png',
    },
    {
      name: 'Nikita Nikitin',
      email: 'vldgfsd@mail.ru',
      phoneNumber: '+375291124745',
      imageUrl: './assets/blank-avatar.png',
    },
    {
      name: 'Artem Krotov',
      email: 'artem@mail.ru',
      phoneNumber: '+375257848745',
      imageUrl: './assets/blank-avatar.png',
    },
    {
      name: 'Stanislav Popov',
      email: 'stanislav@mail.ru',
      phoneNumber: '+375257845145',
      imageUrl: './assets/blank-avatar.png',
    },
    {
      name: 'Aleksei Pronin',
      email: 'aleksei@mail.ru',
      phoneNumber: '+375254788745',
      imageUrl: './assets/blank-avatar.png',
    },
    {
      name: 'Vladislav Popov',
      email: 'vladislav@mail.ru',
      phoneNumber: '+375291548745',
      imageUrl: './assets/blank-avatar.png',
    },
  ];
  
  constructor() { }

  ngOnInit() { }
}
