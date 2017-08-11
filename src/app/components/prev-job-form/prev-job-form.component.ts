import { Component, Input, Output, EventEmitter, DoCheck } from '@angular/core';
import { ContactsFormComponent } from '../contacts-form/contacts-form.component';

@Component({
  selector: 'prev-job-form',
  templateUrl: 'prev-job-form.component.html',
  styleUrls: ['prev-job-form.component.scss'],
})
export class PrevJobFormComponent implements DoCheck {
  @Input() prevJob: any = {};
  @Output() prevJobChange: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngDoCheck() {
    this.prevJobChange.emit(this.prevJob);
  }
}
