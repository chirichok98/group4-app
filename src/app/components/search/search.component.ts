import { Component } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'search-panel',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  constructor() {
    this.init();
  }

  init(): void {
    console.log('q');
  }
  x: number = 0;
  openAdvancedSearch(): void {
    const detailed = $('.detailed-search');
    const arrow = $('.arrow-img');
    const container = $('.search-block');
    if (this.x >= 360) {
      this.x - 360;
    }
    if (!detailed.height()) {
      detailed.animate({ height: '8rem', opacity: 1 });
      container.animate({ height: '24rem' });
      this.x += 180;
      arrow.css({ 'transform': 'rotate(' + this.x + 'deg)', 'transition-duration': '0.5s' });
    } else {
      detailed.animate({ height: 0, opacity: 0 });
      this.x += 180;
      arrow.css({ 'transform': 'rotate(' + this.x + 'deg)', 'transition-duration': '0.5s' });
      container.animate({ height: '16rem' });
    }
  }
}
