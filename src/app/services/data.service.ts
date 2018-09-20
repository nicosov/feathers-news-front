import { Injectable } from '@angular/core';
import {Feathers} from './feathers.service';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class DataService {

  constructor(private feathersService: Feathers) { }

  posts$(): Observable<any> {
    return (<any>this.feathersService
      .service('post'))
      .watch()
      .find({
        query: {
          $sort: {createdAt: -1},
        }
      });
  }

  users$(): Observable<any> {
    return (<any>this.feathersService
      .service('users'))
      .watch()
      .find();
  }

  user$(): Observable<any> {
    return (<any>this.feathersService
      .service('users'))
      .watch()
      .get();
}

  sendPost(text: string) {
    if (text === '') {
      return;
    }

    this.feathersService
      .service('post')
      .create({ text });
  }
}
