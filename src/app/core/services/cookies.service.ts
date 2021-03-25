import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class CookiesService {
  cache: any[] = [];
  constructor(private cookie: CookieService) { }
  delete(name: string, path?: string, domain?: string, secure?: boolean, sameSite?: "Lax" | "None" | "Strict") {
    if (!this.cookie.check(name)) return;
    this.cache.filter(cookie => cookie.name === name).slice();
    this.cookie.delete(name, path, domain, secure, sameSite);
  }

  get(name: string): string | void {
    if (!this.cookie.check(name)) return;
    return this.cookie.get(name);
  }

  getAll() {
    return this.cookie.getAll();
  }
  set(name: string, value: string, expires?: number | Date, path?: string, domain?: string, secure?: boolean, sameSite?: "Lax" | "None" | "Strict"): void {
    if (this.cookie.check(name)) return;
    this.cache.push({ name, value, expires, path, domain, secure, sameSite })
    this.cookie.set(name, value, expires, path, domain, secure, sameSite);
  }

}
