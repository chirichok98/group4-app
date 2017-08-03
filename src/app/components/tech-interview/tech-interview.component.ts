import { Component, OnInit, Inject } from '@angular/core';
import { MD_DIALOG_DATA, MdDialogRef } from '@angular/material';
import { SnackbarService } from '../../services/snackbar.service';
import { InterviewService } from '../../services/interview.service';

@Component({
  selector: 'tech-interview',
  templateUrl: 'tech-interview.component.html',
  styleUrls: ['tech-interview.component.scss'],
})
export class TechInterviewComponent implements OnInit {
  result: any = {};

  constructor(@Inject(MD_DIALOG_DATA) public data: any,
              public dialogRef: MdDialogRef<TechInterviewComponent>,
              private snackService: SnackbarService,
              private iService: InterviewService) { }

  ngOnInit() { }

  sendInterview() {

  }
}
