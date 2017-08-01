import { Injectable } from '@angular/core';
import { CookieService, CookieOptions } from 'ngx-cookie';

@Injectable()
export class MyCookieService {
  constructor(private cookie: CookieService) { }


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
    const cookie: any = this.cookie.getObject('current');
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

  getRole(): string | null {
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

  addCandidate(obj: number): boolean {
    const store: any = this.cookie.getObject('basket');
    // const elem = JSON.stringify(obj);
    if (!store.candidates.includes(obj)) {
      store.candidates.push(obj);
      this.cookie.putObject('basket', {
        candidates: store.candidates || [],
        positions: store.positions || [],
      });
      return true;
    }
    console.log('current basket');
    console.log(store.candidates);
    return false;
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
    console.log('current basket');
    console.log(store.positions);
    return false;
  }

  getCandidates(): any {
    const basket: any = this.cookie.getObject('basket');
    return basket.candidates;
  }

  getVacancies(): any {
    const basket: any = this.cookie.getObject('basket');
    return basket.positions;
  }
}
