import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  signUp = (username: string, password: string): boolean => {
    return username === 'admin' && password === 'admin';
  };
}
