import { Component, Input, EventEmitter, Output, DoCheck } from '@angular/core';

@Component({
  selector: 'contacts-form',
  templateUrl: 'contacts-form.component.html',
  styleUrls: ['contacts-form.component.scss'],
})
export class ContactsFormComponent implements DoCheck {
  @Input() contact: any;
  @Output() contactChange: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngDoCheck() {
    this.contactChange.emit(this.contact);
  }
}
