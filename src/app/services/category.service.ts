import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Category} from '../models/category';

@Injectable({providedIn: 'root'})
export class CategoryService {
  constructor(private http: HttpClient) {}


  removeCategory(id: number) {
    const auth = localStorage.getItem('auth');
    const he = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Access-Control-Allow-Origin', '*')
      .set('authorization_token', auth);
    this.http.delete('http://localhost:8080/api/category/' + id, {headers: he, observe: 'response'}).subscribe((response) => {
      alert('Category was successfully deleted!');
    }, error => {
      alert(error.statusText);
    });
  }
  getCategory(categoryId) {
    if (categoryId) {
      const auth = localStorage.getItem('auth');
      const he = new HttpHeaders()
        .set('content-type', 'application/json')
        .set('Access-Control-Allow-Origin', '*')
        .set('authorization_token', auth);
      return this.http.get('http://localhost:8080/api/show/category/' + categoryId, {headers: he, observe: 'response'});
    }
    return null;
  }
  editCategory(category: Category, nName, nDescription) {
    // alert('Mistake! You have already had category with name ' + category.name);
    // alert("Category was edited and saved");
    const auth = localStorage.getItem('auth');
    const he = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Access-Control-Allow-Origin', '*')
      .set('authorization_token', auth);
    this.http.post('http://localhost:8080/api/category',
      {id: category.id, name: nName[0].toUpperCase() + nName.slice(1), description: nDescription},
      {headers: he, observe: 'response'}).subscribe((response) => {
      alert('Category was successfully edited!');
    }, error => {
      alert(error.statusText);
    });

  }
  addCategory(nName, nDescription) {
    // alert('Mistake! You have already had category with name ' + name);
    // alert("Category was succesfully created");
    const auth = localStorage.getItem('auth');
    const he = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Access-Control-Allow-Origin', '*')
      .set('authorization_token', auth);
    this.http.put('http://localhost:8080/api/category',
      { name:  nName[0].toUpperCase() + nName.slice(1), description: nDescription},
      {headers: he, observe: 'response'}).subscribe((response) => {
     alert('Category was successfully added!');
    }, error => {
      alert(error.statusText);
    });
 }
 getCaregories() {
   const auth = localStorage.getItem('auth');
   const he = new HttpHeaders()
     .set('content-type', 'application/json')
     .set('Access-Control-Allow-Origin', '*')
     .set('authorization_token', auth);
   return this.http.get('http://localhost:8080/api/show/categories', {headers: he, observe: 'response'});
 }
}
