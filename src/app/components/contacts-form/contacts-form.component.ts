import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'contacts-form',
  templateUrl: 'contacts-form.component.html',
  styleUrls: ['contacts-form.component.scss'],
})
export class ContactsFormComponent implements OnInit {
  contact: any = {};
  constructor() { }

  ngOnInit() { }
}
