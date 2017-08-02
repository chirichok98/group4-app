import { Injectable, HostListener, Inject } from '@angular/core';
import { HttpService } from './http.service';
import { SearchObject } from '../components/search/search.component';
@Injectable()
export class NavbarFunctionsService {
  gg(obj: SearchObject) {
    console.log(obj);
  }
}
