import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ICandidateDetail } from '../../interfaces/ICandidateDetail';
import { Router } from '@angular/router';
import { MyCookieService } from '../../services/cookie.service';

@Component({
  selector: 'candidate-detail-card',
  templateUrl: 'candidate-detail-card.component.html',
  styleUrls: ['candidate-detail-card.component.scss'],
})
export class CandidateDetailComponent implements OnInit {
  @Input() candidate: ICandidateDetail;
  constructor(private router: Router, private cookie: MyCookieService) { }

  ngOnInit() { 
  }

  goToEditForm() {
    const url: string = `edit/candidate/${this.candidate.id}`;
    this.cookie.updateUrl(url);
    this.router.navigate([url]);
  }
}
