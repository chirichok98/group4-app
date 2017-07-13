import { Component, Input, OnInit } from '@angular/core';

export interface IDescribeBlock {
  title: string;
  content: string;
  imageUrl: string; 
}

@Component({
  selector: 'describe-block',
  templateUrl: './describe-block.component.html',
  styleUrls: ['./describe-block.component.scss'],
})
export class DescribeBlockComponent implements OnInit {
  @Input() description: IDescribeBlock;
  loadedDescription: IDescribeBlock;

  constructor() { }

  ngOnInit() {
    this.loadedDescription = this.description;
  }
}
