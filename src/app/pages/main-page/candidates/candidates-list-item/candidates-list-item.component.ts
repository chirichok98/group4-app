import { Component, OnInit } from '@angular/core';

import { ICandidatePreview } from '../../../../components/candidate-card/candidate-card.component';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'candidates-list-item',
  templateUrl: 'candidates-list-item.component.html',
  styleUrls: ['./candidates-list-item.component.scss'],
})

export class CandidatesListItemComponent implements OnInit {
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

  currentCandidate: ICandidatePreview;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params: ParamMap) => {
      this.currentCandidate = this.candidates.find(item => item.name === params['name']);
    });
  }
}
