import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGurdService implements CanActivate {

  constructor() { }

  canActivate(): boolean {
    if (localStorage.getItem("isUser") == 'true') {
      return true;
    }
    return false;
  }
}
