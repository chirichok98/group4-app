import { Component, OnInit, Inject } from '@angular/core';
import { MD_DIALOG_DATA, MdDialogRef } from '@angular/material';
import { SnackbarService } from '../../services/snackbar.service';
import { InterviewService } from '../../services/interview.service';

@Component({
  selector: 'interview-feedback',
  templateUrl: 'interview-feedback.component.html',
  styleUrls: ['interview-feedback.component.scss'],
})
export class InterviewFeedbackComponent implements OnInit {
  result: any = {};

  constructor(@Inject(MD_DIALOG_DATA) public data: any,
              public dialogRef: MdDialogRef<InterviewFeedbackComponent>,
              private snackService: SnackbarService,
              private iService: InterviewService) { }

  ngOnInit() { }

  sendInterview() {

  }
}
