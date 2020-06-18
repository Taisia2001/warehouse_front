import { Injectable } from '@angular/core';


@Injectable({providedIn: 'root'})
export class AuthService {

  private headers = new Headers({'Content-Type': 'application/json'});
  username = "";
  constructor() {
    this.authorized = false;
  }

  authorized;
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
    this.authorized=false;
    this.username='';
  }

  isAuthenticated() {

    return ( localStorage.getItem('data') ) ? true : false;

  }

}
