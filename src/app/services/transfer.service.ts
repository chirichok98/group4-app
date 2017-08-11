import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class TransferService {
  private someSubject: Subject<any> = new Subject<any>();

  public putData(options: any, type?: string): void {
    const obj = { };
    obj['options'] = options;
    if (type) {
      obj['type'] = type;
    }
    this.someSubject.next(obj);
  }

  public getData(): Observable<any> {
    return this.someSubject.asObservable();
  }
}
