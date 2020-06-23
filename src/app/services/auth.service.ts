import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';


@Injectable({providedIn: 'root'})
export class AuthService {
  username;
  constructor(private http: HttpClient, private router: Router) {
    this.username = localStorage.getItem('username');
  }

  login(username: string, pass: string) {
    return this.http.put('http://localhost:8080/login', {login: username, password: pass}).subscribe((response: Response) => {
      // @ts-ignore
      localStorage.setItem('auth', JSON.stringify(response.authorization_token));
      localStorage.setItem('username', username);
      this.username = username;
      this.router.navigate(['products']);
    });
  }

  logout() {
    localStorage.removeItem('auth');
    localStorage.removeItem('username');
  }

  isAuthenticated() {
    return ( localStorage.getItem('auth') ) ? true : false;
  }

}
