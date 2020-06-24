import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';


@Injectable({providedIn: 'root'})
export class AuthService {
  username;
  constructor(private http: HttpClient, private router: Router) {
    this.username = localStorage.getItem('username');
  }
  signup(username: string, pass: string) {
    const he = new HttpHeaders();
    he.append('content-type', 'application/json');
    he.append('Access-Control-Allow-Origin', '*');
    return this.http.put('http://localhost:8080/signup',
      {login: username, password: pass},
      {headers: he, observe: 'response'})
      .subscribe((response) => {

      // @ts-ignore
      localStorage.setItem('auth', response.body.authorization_token);
      localStorage.setItem('username', username);
        // @ts-ignore
      localStorage.setItem('role', response.body.role);
      this.username = username;
      // @ts-ignore
      this.role = response.body.role;
      this.router.navigate(['products']);
    }, error => {
      alert(error.statusText);
    });
  }
  login(username: string, pass: string) {
    const he = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Access-Control-Allow-Origin', '*');
    return this.http.put('http://localhost:8080/login',
      {login: username, password: pass},
      {headers: he, observe: 'response'})
      .subscribe((response) => {
      // @ts-ignore
        localStorage.setItem('auth', response.body.authorization_token);
        localStorage.setItem('username', username);
        // @ts-ignore
        localStorage.setItem('role', response.body.role);
        this.username = username;
        // @ts-ignore
        this.role = response.body.role;
        this.router.navigate(['products']);
    }, error => {
      alert(error.statusText);
    });
  }

  logout() {
    localStorage.removeItem('auth');
    localStorage.removeItem('username');
    localStorage.removeItem('role');
  }

  isAuthenticated() {
    return ( localStorage.getItem('auth') ) ? true : false;
  }
  itCanAdd() {
    const role = localStorage.getItem('role');
    return role === 'SuperAdmin' || role === 'Admin';
  }
  itSuperAdmin() {
    return localStorage.getItem('role') === 'SuperAdmin';
  }

}
