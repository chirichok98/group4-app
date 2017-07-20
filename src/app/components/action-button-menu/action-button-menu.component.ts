import { Component, OnInit, Input } from '@angular/core';
import { IUserPreview } from '../../interfaces/IUserPreview';

@Component({
    selector: 'action-button-menu',
    templateUrl: 'action-button-menu.component.html',
    styleUrls: ['action-button-menu.component.scss'],
})

export class ActionButtonComponent implements OnInit {
    @Input() user: IUserPreview;
    constructor() { }

    ngOnInit() { }
}