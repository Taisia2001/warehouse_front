import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({providedIn: 'root'})
export class AuthService {

  private headers = new Headers({'Content-Type': 'application/json'});
  username = localStorage.getItem('data');
  constructor(private http: HttpClient) {
  }

  async login(username: string, pass: string) {
    return this.http.put('http://localhost:8080/login', {login: username, password: pass}).subscribe((response: Response) => {
      // @ts-ignore
      localStorage.setItem('auth', JSON.stringify(response.authorization_token));
      this.username = username;
    });
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('data');
    this.username = '';
  }

  isAuthenticated() {
    return ( localStorage.getItem('auth') ) ? true : false;

  }

}
