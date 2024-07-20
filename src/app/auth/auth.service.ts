import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLogger: boolean = true;

  constructor() { }

  isAuthLogger(){
    return this.isLogger;
  }
}
