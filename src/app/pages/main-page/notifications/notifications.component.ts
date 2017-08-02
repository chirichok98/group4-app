import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { DataSource } from '@angular/cdk';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import { INotificationOption } from '../../../interfaces/INotificationOption';

declare const $;

export enum NotificationType { Reminders, News, Assignments }

@Component({
  selector: 'notifications',
  templateUrl: 'notifications.component.html',
  styleUrls: ['notifications.component.scss'],
})

export class NotificationsComponent implements OnInit {
  displayedColumns = ['color', 'type', 'date', 'description'];
  exampleDatabase = new ExampleDatabase();
  dataSource: ExampleDataSource | null;


  ngOnInit() {
    this.dataSource = new ExampleDataSource(this.exampleDatabase);
  }

  constructor(
  ) { 
    setTimeout(()=> {
      this.changeVisibility('dark-blue', 0);
    });
   }

  // Logic: We get list of classes of element that we clicked on. Then we check 
  // if one of needed classes is included in this classlist. If we found it, 
  // then we reverse boolean value of this item in visibility array. Next step:
  // we are showing changes by using jquery and by linking definition's classes with list's
  // of notifications classes. 

  visibilityArray: boolean[] = [true, true, true];
  colorsArray: string[] = ['dark-blue', 'light-blue', 'light-gray'];

  checkVisibility() {
    const classlist = event.srcElement.classList;
    console.log(event);
    this.colorsArray.forEach((item, index) => {
      if (classlist.contains(item)) {
        this.changeVisibility(item, index);
      }
    });
  }
  private changeVisibility(item, index): void {
    this.visibilityArray[index] = !this.visibilityArray[index];
    this.showChanges(item, this.visibilityArray[index]);
  }
  private showChanges(item, state): void {
    if (state) {
      $(this.defineNotificationItem(item)).css({ display: 'flex' });
      $('.' + item).css({ 'background-color': '', opacity: 1 });
    } else {
      $(this.defineNotificationItem(item)).css({ display: 'none' });
      $('.' + item).css({ 'background-color': 'black', opacity: 0.7 });
    }
  }
  private defineNotificationItem(item) {
    switch (item) {
      case this.colorsArray[0]: return '.Reminders';
      case this.colorsArray[1]: return '.News';
      case this.colorsArray[2]: return '.Assignments';
      default: return '';
    }
  }

  ngOnDestroy() {
    console.log('destr');
  }
}


export class ExampleDatabase {
  notifications: INotificationOption[] = [
    {
      type: NotificationType[NotificationType.Reminders],
      date: new Date(2017, 7, 16),
      description: 'You have the Interview with Artem Krotov',
    },
    {
      type: NotificationType[NotificationType.News],
      date: new Date(2017, 6, 14),
      description: 'You created the new candidate card for Artem Krotov',
    },
    {
      type: NotificationType[NotificationType.Assignments],
      date: new Date(2017, 7, 10),
      description: 'Natasha assigned the Vladislav Popov candidate to you',
    },
    {
      type: NotificationType[NotificationType.Assignments],
      date: new Date(2017, 7, 10),
      description: 'Natasha assigned the Vladislav Popov candidate to you',
    },
    {
      type: NotificationType[NotificationType.News],
      date: new Date(2017, 6, 14),
      description: 'You created the new candidate card for Artem Krotov',
    },
  ];

  /** Stream that emits whenever the data has been modified. */
  dataChange: BehaviorSubject<INotificationOption[]> = 
    new BehaviorSubject<INotificationOption[]>([]);
  get data(): INotificationOption[] {
    return this.dataChange.value;
  }

  constructor() {
    const copiedData = [];
    for (let i = 0; i < this.notifications.length; i++) {
      copiedData.push(this.notifications[i]);
      this.dataChange.next(copiedData);
    }
    this.dataChange.subscribe((value) => {
    });
  }
}

export class ExampleDataSource extends DataSource<any> {
  constructor(private _exampleDatabase: ExampleDatabase) {
    super();
  }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<INotificationOption[]> {
    return this._exampleDatabase.dataChange;
  }

  disconnect() { }
}
