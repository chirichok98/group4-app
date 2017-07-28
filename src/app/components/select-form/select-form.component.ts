import {
  Component, OnInit, Input, ViewChild, ElementRef,
  EventEmitter, Output } from '@angular/core';
import { IGeneral } from '../../interfaces/IGeneral';

declare const $;

@Component({
  selector: 'select-form',
  templateUrl: 'select-form.component.html',
  styleUrls: ['select-form.component.scss'],
})
export class SelectFormComponent implements OnInit {
  @ViewChild('select') value: ElementRef;
  @Input() array: IGeneral[];
  @Input() placeholder: string;

  @Input() result: number;
  @Output() resultChange: EventEmitter<number> = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit() {
    $(document).ready(() => {
      $('select').material_select();
    });
  }

  getSelectedIndex(field: any): number | null {
    const str: string = field.nativeElement.value;
    const indexOfSpace: number = str.indexOf(' ');
    const index: number = +str.slice(indexOfSpace);
    if (!index) return null;
    return index;
  }

  ngDoCheck() {
    const index: number = this.getSelectedIndex(this.value);
    if (index <= 0) return;
    // this.result = index;
    this.resultChange.emit(index);
  }
}
