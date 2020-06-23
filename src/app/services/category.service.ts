import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Category} from '../models/category';

@Injectable({providedIn: 'root'})
export class CategoryService {
  private categories;
  constructor(private http: HttpClient) {}


  removeCategory(id: number) {
    const auth = localStorage.getItem('auth');
    const he = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Access-Control-Allow-Origin', '*')
      .set('authorization_token', auth.substring(1, auth.length - 1));
    this.http.delete('http://localhost:8080/api/category/' + id, {headers: he}).subscribe((response: Response) => {
      //alert(response);
      console.log(response);
    });
  }
  getCategory(categoryId) {
    if(categoryId){
      const auth = localStorage.getItem('auth');
      const he = new HttpHeaders()
        .set('content-type', 'application/json')
        .set('Access-Control-Allow-Origin', '*')
        .set('authorization_token', auth.substring(1, auth.length - 1));
    return this.http.get('http://localhost:8080/api/show/category/' + categoryId, {headers: he});
    }
    return null;
  }
  editCategory(category: Category, nName, nDescription) {
    //alert('Mistake! You have already had category with name ' + category.name);
    // alert("Category was edited and saved");
    const auth = localStorage.getItem('auth');
    const he = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Access-Control-Allow-Origin', '*')
      .set('authorization_token', auth.substring(1, auth.length - 1));
   this.http.post('http://localhost:8080/api/category',
      {id: category.id, name: nName, description: nDescription},
      {headers: he}).subscribe((response: Response) => {
      const p = response;
      console.log(p);
    });

  }
  addCategory(nName, nDescription) {
    //alert('Mistake! You have already had category with name ' + name);
    // alert("Category was succesfully created");
    const auth = localStorage.getItem('auth');
    const he = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Access-Control-Allow-Origin', '*')
      .set('authorization_token', auth.substring(1, auth.length - 1));
    this.http.put('http://localhost:8080/api/category',
      { name: nName, description: nDescription},
      {headers: he}).subscribe((response: Response) => {
      const p = response;
      console.log(p);
    });
 }
 getCaregories() {
   const auth = localStorage.getItem('auth');
   const he = new HttpHeaders()
     .set('content-type', 'application/json')
     .set('Access-Control-Allow-Origin', '*')
     .set('authorization_token', auth.substring(1, auth.length - 1));
   return this.http.get('http://localhost:8080/api/show/categories', {headers: he});
 }
}
