import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ContactsFormComponent } from '../contacts-form/contacts-form.component';

@Component({
  selector: 'prev-job-form',
  templateUrl: 'prev-job-form.component.html',
  styleUrls: ['prev-job-form.component.scss'],
})
export class PrevJobFormComponent implements OnInit, AfterViewInit {
  @ViewChild('contacts') private contactsForm: ContactsFormComponent;
  prevJob: any = {};
  constructor() { }

  ngOnInit() { }

  ngAfterViewInit() {
    this.prevJob.contact = this.contactsForm.contact;
  }
}
