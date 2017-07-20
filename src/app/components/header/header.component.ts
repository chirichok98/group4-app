import { Component } from '@angular/core';
import { IUserPreview } from '../../interfaces/IUserPreview';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent { 
  loggedUser: IUserPreview = {
    id: 1,
    name: "Vasya Pupkin",
    role: "admin",
  };
}
