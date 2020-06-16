import { Injectable } from '@angular/core';


import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import * as Http from 'http';

// import { User } from './../models/user';

@Injectable()
export class AuthService {

  private headers = new Headers({'Content-Type': 'application/json'});

  constructor() { }

  login(username: string, password: string) {

  /*  return this.http.post(appConfig.apiUrl + 'login', JSON.stringify({username, password}), {headers: this.headers})
      .map((response: Response) => {
        // login successful if there's a jwt token in the response
        const user = response.json();

        if (user && user.status) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('data', JSON.stringify(user.data));

          // Initialize cart
          localStorage.setItem('cart', JSON.stringify([]));

        }

        return user;
      });*/
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('data');
    localStorage.removeItem('cart');
    localStorage.removeItem('shipDetail');
  }

  isAuthenticated() {

    return ( localStorage.getItem('data') ) ? true : false;

  }

}
