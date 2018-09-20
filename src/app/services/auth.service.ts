import { Injectable } from '@angular/core';
import {Feathers} from './feathers.service';
import {Router} from '@angular/router';

@Injectable()
export class AuthService {

  constructor(private feathersService: Feathers, private router: Router) { }

  register(credentials?): Promise<any> {
    return this.feathersService.service('users').create(credentials);
  }

  login(credentials?): Promise<any> {
    return this.feathersService.authenticate(credentials);
  }

  logout() {
    this.feathersService.logout();
    this.router.navigate(['/login']);
  }
}
