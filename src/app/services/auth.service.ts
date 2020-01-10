import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private cookieService: CookieService) { }

  login(username: string) {
    this.cookieService.set('username', username);
  }

  getCurrentUsername(): string {
    return this.cookieService.get('username');

  }
}
