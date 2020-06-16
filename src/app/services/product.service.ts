import {Injectable} from '@angular/core';
import {Product} from '../models/product';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class ProductService {
  public products: Product[] = [// [];
  {id: 1, name: 'bread', description: 'd', price: 5, producer: 'me', amount: 2, category: 'food'},
    {id: 2, name: 'milk', description: 'd', price: 5, producer: 'me', amount: 2, category: 'food'},
    {id: 3, name: 'apple', description: 'd', price: 5, producer: 'me', amount: 2, category: 'food'},
    {id: 4, name: 'grass', description: 'd', price: 5, producer: 'me', amount: 2, category: 'food'},
    {id: 1, name: 'bread', description: 'd', price: 5, producer: 'me', amount: 2, category: 'food'},
    {id: 2, name: 'milk', description: 'd', price: 5, producer: 'me', amount: 2, category: 'food'},
    {id: 3, name: 'apple', description: 'd', price: 5, producer: 'me', amount: 2, category: 'food'},
    {id: 4, name: 'grass', description: 'd', price: 5, producer: 'me', amount: 2, category: 'food'}

  ];
  constructor(private http: HttpClient) {}
  /*fetchTodos(): Observable<Product[]> {
    return this.http.get<Product[]>('https://jsonplaceholder.typicode.com/todos?_limit=30')
      .pipe(tap(todos => this.products = todos));
  }*/


  removeProduct(id: number) {
    this.products = this.products.filter(t => t.id !== id);
  }
  addProduct(todo: Product) {
    this.products.push(todo);
  }
  editProduct(todo: Product) {
    this.products.push(todo);
  }
}
