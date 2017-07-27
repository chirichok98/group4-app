import { Component, OnInit, Input } from '@angular/core';
import { IUserPreview } from '../../interfaces/IUserPreview';
import { Router } from '@angular/router';

@Component({
  selector: 'action-button-menu',
  templateUrl: 'action-button-menu.component.html',
  styleUrls: ['action-button-menu.component.scss'],
})

export class ActionButtonComponent implements OnInit {
  @Input() user: IUserPreview;

  constructor(private router: Router) { }

  ngOnInit() { }

  openPage(url) {
    this.router.navigate([url]);
  }
}
