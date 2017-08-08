import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class SearchCleanerService {
  private someSubject: Subject<any> = new Subject<any>();

  public sendInfo(): void {
    this.someSubject.next({ });
  }

  public getInfo(): Observable<any> {
    return this.someSubject.asObservable();
  }
}
