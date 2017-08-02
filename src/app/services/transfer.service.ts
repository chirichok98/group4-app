import { Injectable, HostListener, Inject } from '@angular/core';
import { HttpService } from './http.service';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
// import { SearchObject } from '../components/search/search.component';
@Injectable()
export class TransferService {
//   linkSearchAndPager(obj: any) {
//     console.log(obj);
//   }
  private someSubject: Subject<any> = new Subject<any>();
  putData(data): void {
    this.someSubject.next(data);
  }
  getData(): Observable<any> {
    return this.someSubject.asObservable();
  }
}
