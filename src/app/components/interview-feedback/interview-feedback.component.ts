import { Component, OnInit, Inject } from '@angular/core';
import { MD_DIALOG_DATA, MdDialogRef } from '@angular/material';
import { SnackbarService } from '../../services/snackbar.service';
import { InterviewService } from '../../services/interview.service';
import { DictionariesService } from '../../services/dictionaries.service';
import { IGeneral } from '../../interfaces/IGeneral';

@Component({
  selector: 'interview-feedback',
  templateUrl: 'interview-feedback.component.html',
  styleUrls: ['interview-feedback.component.scss'],
})
export class InterviewFeedbackComponent implements OnInit {
  result: any = {};
  engLevel: IGeneral[] = [];
  
  constructor(@Inject(MD_DIALOG_DATA) public data: any,
              public dialogRef: MdDialogRef<InterviewFeedbackComponent>,
              private snackService: SnackbarService,
              private iService: InterviewService,
              private dService: DictionariesService) { 
    this.dService.getEnglishLevel()
      .then(eng => this.engLevel = eng);
  }

  ngOnInit() { }

  sendResult() {
    this.iService.sendInterviewFeedback(this.result, 'tech')
      .then(res => console.log(res));
  }
}
