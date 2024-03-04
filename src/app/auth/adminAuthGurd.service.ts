import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGurdService implements CanActivate {

  constructor() { }

  canActivate(): boolean {
    if (localStorage.getItem("isAdmin") == 'true') {
      return true;
    }
    return false;
  }

}
