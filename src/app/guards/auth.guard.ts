import { AuthService } from './../services/auth.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {

  }

  canActivate(activatedRoute: ActivatedRouteSnapshot, routerState: RouterStateSnapshot) {
    if (this.authService.getCurrentUsername()) {
      return this.router.parseUrl('/positions');
    } else {
      return true;
    }
  }
}
