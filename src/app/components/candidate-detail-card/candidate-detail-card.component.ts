import { Component, Input } from '@angular/core';
import { MdDialog } from '@angular/material';
import { Router } from '@angular/router';
import { ICandidateDetail } from '../../interfaces/ICandidateDetail';
import { MyCookieService } from '../../services/cookie.service';
import { DownloadService } from '../../services/download.service';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'candidate-detail-card',
  templateUrl: 'candidate-detail-card.component.html',
  styleUrls: ['candidate-detail-card.component.scss'],
})
export class CandidateDetailComponent {
  @Input() candidate: ICandidateDetail;
  constructor(private router: Router,
              private cookie: MyCookieService,
              private downloadService: DownloadService,
              public dialog: MdDialog) { }

  goToEditForm() {
    const url: string = `edit/candidate/${this.candidate.id}`;
    this.cookie.updateUrl(url);
    this.router.navigate([url]);
  }

  addInterview(): void {
    this.dialog.open(ModalComponent, {
      data: { id: this.candidate.id },
    });
  }

  download() {
    alert('qq');
    // this.downloadService.downloadFile();
  }
}
