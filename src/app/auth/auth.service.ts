import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  public isAuthenticated(status: boolean) {
    if (status) {
      return true;
    } else {
      return false;
    }
  }
}
