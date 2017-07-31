import { Component, OnInit } from '@angular/core';
import { MyCookieService } from '../../../services/cookie.service';
import { Router } from '@angular/router';


@Component({
  selector: 'candidates',
  templateUrl: 'candidates.component.html',
  styleUrls: ['./candidates.component.scss'],
})
export class CandidatesComponent implements OnInit {
  
  constructor(private cookie: MyCookieService, private router: Router) { }

  ngOnInit() { }

  addCandidate(): void {
    const url: string = 'create/candidate';
    this.cookie.updateUrl(url);
    this.router.navigate([url]);
  }
}
