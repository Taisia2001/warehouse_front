import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {Category} from '../models/category';

@Injectable({providedIn: 'root'})
export class CategoryService {
  public categories: Category[] = [
    {id: 1, name: 'food', description: 'd'},
    {id: 2, name: 'weapon', description: 'd'},
    {id: 3, name: 'laptops', description: 'd'},
    {id: 4, name: 'people', description: 'd'},
    {id: 1, name: 'slave', description: 'd'},
    {id: 2, name: 'wine', description: 'd'},
    {id: 3, name: 'toy', description: 'd'},
    {id: 4, name: 'phones', description: 'd'}

  ];
  constructor(private http: HttpClient) {}
  /*fetchTodos(): Observable<Product[]> {
    return this.http.get<Product[]>('https://jsonplaceholder.typicode.com/todos?_limit=30')
      .pipe(tap(todos => this.products = todos));
  }*/


  removeProduct(id: number) {
    this.categories = this.categories.filter(t => t.id !== id);
  }

}
