import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { IPositionPreview } from '../../interfaces/IPositionPreview';
import { MyCookieService } from '../../services/cookie.service';
import { SnackbarService } from '../../services/snackbar.service';

@Component({
  selector: 'position-preview-card',
  templateUrl: 'position-preview-card.component.html',
  styleUrls: ['position-preview-card.component.scss'],
})
export class PositionPreviewComponent {
  @Input() position: IPositionPreview;
  @Input() showBasket: boolean = true;
  constructor(private router: Router, 
              private cookie: MyCookieService,
              private snackService: SnackbarService) { }

  isAdded: boolean = false;

  ngDoCheck() {
    const id: number[] = this.cookie.getPositions();
    if (this.position && id.length && id.includes(this.position.id)) {
      this.isAdded = true;
    }
  }

  goToDetailView() {
    this.router.navigate([`main-page/positions`, this.position.id]);
  }

  addToBasket(event: any): void {
    if (event.stopPropagation) {
      event.stopPropagation();
    }

    if (this.cookie.addPosition(this.position.id)) {
      this.isAdded = true;
      this.snackService.showSnack('Succesfully added to basket!','SUCCESS');
    } else {
      const index: number = this.cookie.getPositions()
        .findIndex(i => i === this.position.id);
      this.cookie.removeIdFromPositions(index);
      this.isAdded = false;
      this.snackService.showSnack('Position removed successfully!','DELETE');
    }
  }
}
