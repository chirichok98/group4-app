import { Component, Input } from '@angular/core';
import { ICandidateDetail } from '../../interfaces/ICandidateDetail';
import { Router } from '@angular/router';
import { MyCookieService } from '../../services/cookie.service';
import { DownloadService } from '../../services/download.service';

@Component({
  selector: 'candidate-detail-card',
  templateUrl: 'candidate-detail-card.component.html',
  styleUrls: ['candidate-detail-card.component.scss'],
})
export class CandidateDetailComponent{
  @Input() candidate: ICandidateDetail;
  constructor(private router: Router, private cookie: MyCookieService,
              private downloadService: DownloadService) { }

  goToEditForm() {
    const url: string = `edit/candidate/${this.candidate.id}`;
    this.cookie.updateUrl(url);
    this.router.navigate([url]);
  }
  
  download() {
    alert('qq');
    // this.downloadService.downloadFile();
  }
}
