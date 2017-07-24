import { Component, OnInit, Input, ViewChild, ElementRef, Renderer } from '@angular/core';
import { IGeneral } from '../../interfaces/IGeneral';

declare const $;

@Component({
  selector: 'select-form',
  templateUrl: 'select-form.component.html',
  styleUrls: ['select-form.component.scss'],
})
export class SelectFormComponent implements OnInit {
  @ViewChild('select') result: ElementRef;
  @Input() array: IGeneral[];
  @Input() placeholder: string;
  @Input() multiple: boolean;

  constructor() { }

  ngOnInit() {
    $(document).ready(() => {
      $('select').material_select();
    });
  }
}
