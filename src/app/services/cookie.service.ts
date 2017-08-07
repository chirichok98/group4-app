import { Injectable, DoCheck } from '@angular/core';
import { CookieService, CookieOptions } from 'ngx-cookie';

@Injectable()
export class MyCookieService {
  constructor(public cookie: CookieService) { }


  setLifeTime(seconds: number): CookieOptions {
    const expires: Date = new Date();
    expires.setSeconds(expires.getSeconds() + seconds);
    const cookieOption: CookieOptions = { expires };
    return cookieOption;
  }

  setCookie(obj: any): void {
    return this.cookie.putObject('current', obj, this.setLifeTime(obj.expires_in));
  }

  getCookie(): any {
    return this.cookie.getObject('current');
  }

  removeCookie(): void {
    this.cookie.removeAll();
  }


  updateUrl(url: string): void {
    const cookie: any = this.getCookie();
    cookie.url = url;
    this.setCookie(cookie);
  }

  getUrl(): string | null {
    const cookie: any = this.getCookie();
    if (cookie) {
      return cookie.url;
    }
    return null;
  }

  getRole(): number | null {
    const cookie: any = this.getCookie();
    if (cookie) {
      return cookie.role;
    }
    return null;
  }

  getToken(): string | null {
    const cookie: any = this.getCookie();
    if (cookie) {
      return cookie.access_token;
    }
    return null;
  }

  initBasket(): void {
    this.cookie.putObject('basket', {
      candidates: [],
      positions: [],
    });
  }

  removeBasket(): void {
    this.cookie.remove('basket');
    this.initBasket();
  }

  addCandidate(obj: number): boolean {
    const store: any = this.cookie.getObject('basket');
    if (!store.candidates.includes(obj)) {
      store.candidates.push(obj);
      this.cookie.putObject('basket', {
        candidates: store.candidates || [],
        positions: store.positions || [],
      });
      return true;
    }
    return false;
  }

  removeIdFromCandidate(index: any): void {
    const store: any = this.cookie.getObject('basket');
    store.candidates.splice(index, 1);
    this.cookie.putObject('basket', {
      candidates: store.candidates || [],
      positions: store.positions || [],
    });
  }

  addVacancy(obj: number): boolean {
    const store: any = this.cookie.getObject('basket');
    if (!store.positions.includes(obj)) {
      store.positions.push(obj);
      this.cookie.putObject('basket', {
        candidates: store.candidates || [],
        positions: store.positions || [],
      });
      return true;
    }
    return false;
  }

  removeIdFromVacancies(index: any): void {
    const store: any = this.cookie.getObject('basket');
    store.positions.splice(index, 1);
    this.cookie.putObject('basket', {
      candidates: store.candidates || [],
      positions: store.positions || [],
    });
  }

  getCandidates(): any {
    const basket: any = this.cookie.getObject('basket');
    return basket.candidates;
  }

  getVacancies(): any {
    const basket: any = this.cookie.getObject('basket');
    return basket.positions;
  }

  initCheckedNotifications(): void {
    this.cookie.remove('notifications');
    this.cookie.putObject('notifications', { checked: [] });
  }

  toggleChecked(id: number): boolean {
    const store: any = this.cookie.getObject('notifications');
    if (!store.checked.includes(id)) {
      store.checked.push(id);
      this.cookie.putObject('notifications', { checked: store.checked || [] });
      return true;
    }
    const notIndex: number = store.checked.findIndex(i => i === id);
    store.checked.splice(notIndex, 1);
    this.cookie.putObject('notifications', { checked: store.checked || [] });
  }

  getCheckedNotifications(): number[] {
    const notifications: any = this.cookie.getObject('notifications');
    return notifications.checked;
  }

  setUnreadAmount(amount: number): void {
    this.cookie.putObject('amount', { amount });
  }
  
  getUnreadAmount(): number {
    const obj: any = this.cookie.getObject('amount');
    if (obj)
      return obj.amount;
    return 0;
  }
}
