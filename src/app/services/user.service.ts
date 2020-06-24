import {Injectable} from '@angular/core';
import {Product} from '../models/product';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from '../models/user';


@Injectable({providedIn: 'root'})
export class UserService {
  constructor(private http: HttpClient) {}

  getUsers() {
    const auth = localStorage.getItem('auth');
    const he = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Access-Control-Allow-Origin', '*')
      .set('authorization_token', auth);
    return this.http.get('http://localhost:8080/users',  {headers: he, observe: 'response'} );
  }
  removeUser(id: number) {
    const auth = localStorage.getItem('auth');
    const he = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Access-Control-Allow-Origin', '*')
      .set('authorization_token', auth);
    this.http.delete('http://localhost:8080/user/' + id, {headers: he, observe: 'response'}).subscribe((response) => {
      alert('User was successfully deleted');
    }, error => {
      alert(error.statusText);
    });
  }

  editUser(user: User, nRole) {
    const auth = localStorage.getItem('auth');
    const he = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Access-Control-Allow-Origin', '*')
      .set('authorization_token', auth);
    this.http.post('http://localhost:8080/user',
      {id: user.id, login: user.login, role: nRole},
      {headers: he, observe: 'response'}).subscribe((response) => {
      alert('Role was successfully changed!');
    }, error => {
      alert(error.statusText);
    });


  }
}
