import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, ParamMap } from '@angular/router';
import { ICandidatePreview } from '../../../../interfaces/ICandidatePreview';

@Component({
  selector: 'candidates-list-item',
  templateUrl: 'candidates-list-item.component.html',
  styleUrls: ['./candidates-list-item.component.scss'],
})

export class CandidatesListItemComponent implements OnInit {
  candidates: ICandidatePreview[] = [
    {
      id: 1,
      firstName: 'Vladislav',
      lastName: 'Popov',
      email: 'vladislav@mail.ru',
      phoneNumber: '+375291548745',
      skillUrl: './assets/blank-avatar.png',
    },
    {
      id: 2,
      firstName: 'Nikita',
      lastName: 'Nikitin',
      email: 'vldgfsd@mail.ru',
      phoneNumber: '+375291124745',
      skillUrl: './assets/blank-avatar.png',
    },
    {
      id: 3,
      firstName: 'Artem',
      lastName: 'Krotov',
      email: 'artem@mail.ru',
      phoneNumber: '+375257848745',
      skillUrl: './assets/blank-avatar.png',
    },
    {
      id: 4,
      firstName: 'Stanislav',
      lastName: 'Popov',
      email: 'stanislav@mail.ru',
      phoneNumber: '+375257845145',
      skillUrl: './assets/blank-avatar.png',
    },
    {
      id: 5,
      firstName: 'Aleksei',
      lastName: 'Pronin',
      email: 'aleksei@mail.ru',
      phoneNumber: '+375254788745',
      skillUrl: './assets/blank-avatar.png',
    },
    {
      id: 6,
      firstName: 'Vladislav',
      lastName: 'Popov',
      email: 'vladislav@mail.ru',
      phoneNumber: '+375291548745',
      skillUrl: './assets/blank-avatar.png',
    },
  ];

  currentCandidate: ICandidatePreview;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params: ParamMap) => {
      this.currentCandidate = this.candidates.find(item => item.id === +params['id']);
    });
  }
}
