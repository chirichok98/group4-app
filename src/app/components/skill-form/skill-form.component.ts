// tslint:disable-next-line:max-line-length
import { Component, OnInit, Input, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';

import { RangeFormComponent } from '../range-form/range-form.component';
import { SelectFormComponent } from '../select-form/select-form.component';

@Component({
  selector: 'skill-form',
  templateUrl: 'skill-form.component.html',
  styleUrls: ['skill-form.component.scss'],
})
export class SkillFormComponent implements OnInit {
  @ViewChild('select') select: SelectFormComponent;
  @ViewChild('range') ranger: RangeFormComponent;
  @Input() array: any;
  constructor() { }

  ngOnInit() { }

}
