import { Component, OnInit } from '@angular/core';
import { MyCookieService } from '../../../services/cookie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'open-positions',
  templateUrl: './open-positions.component.html',
  styleUrls: ['./open-positions.component.scss'],
})
export class OpenPositionsComponent implements OnInit {
  
  constructor(private cookie: MyCookieService, private router: Router) { }

  ngOnInit() { }

  addCandidate(): void {
    const url: string = 'create/vacancy';
    this.cookie.updateUrl(url);
    this.router.navigate([url]);
  }
}
