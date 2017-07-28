import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { SelectFormComponent } from '../select-form/select-form.component';

@Component({
  selector: 'search-option',
  templateUrl: 'search-option.component.html',
  styleUrls: ['search-option.component.scss'],
})

export class SearchOptionComponent implements OnInit {
  @ViewChild('select') select: SelectFormComponent;
  @Input() array: any;
  search: any = {};
  constructor() { }

  ngOnInit() { }
}  
