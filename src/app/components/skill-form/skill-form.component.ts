import { Component, Input, Output, EventEmitter, DoCheck } from '@angular/core';

import { RangeFormComponent } from '../range-form/range-form.component';
import { SelectFormComponent } from '../select-form/select-form.component';

@Component({
  selector: 'skill-form',
  templateUrl: 'skill-form.component.html',
  styleUrls: ['skill-form.component.scss'],
})
export class SkillFormComponent implements DoCheck {
  @Input() array: any;

  @Input() skill: any;
  @Output() skillChange: EventEmitter<any> = new EventEmitter<any>();
  
  constructor() { }

  ngDoCheck() { 
    this.skillChange.emit(this.skill);
  }
}
