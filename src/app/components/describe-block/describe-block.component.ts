import { Component, Input, OnInit } from '@angular/core';

import { IDescribeBlock } from '../../interfaces/IDescribeBlock';

@Component({
  selector: 'describe-block',
  templateUrl: './describe-block.component.html',
  styleUrls: ['./describe-block.component.scss'],
})
export class DescribeBlockComponent implements OnInit {
  @Input() description: IDescribeBlock;

  constructor() { }

  ngOnInit() {
  }
}
