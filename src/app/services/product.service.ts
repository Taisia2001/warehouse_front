import {Injectable} from '@angular/core';
import {Product} from '../models/product';
import {HttpClient} from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class ProductService {
  public products: Product[] = [
  {id: 1, name: 'bread', description: 'd', price: 5, producer: 'me', amount: 2, category: 'food'},
    {id: 2, name: 'milk', description: 'd', price: 5, producer: 'me', amount: 2, category: 'food'},
    {id: 3, name: 'apple', description: 'd', price: 5, producer: 'me', amount: 2, category: 'food'},
    {id: 4, name: 'grass', description: 'd', price: 5, producer: 'me', amount: 2, category: 'weapon'},
    {id: 5, name: 'bread', description: 'd', price: 5, producer: 'me', amount: 2, category: 'laptops'},
    {id: 6, name: 'milk', description: 'd', price: 5, producer: 'me', amount: 2, category: 'slaves'},
    {id: 7, name: 'apple', description: 'd', price: 5, producer: 'me', amount: 2, category: 'food'},
    {id: 8, name: 'grass', description: 'd', price: 5, producer: 'me', amount: 2, category: 'food'}

  ];
  constructor(private http: HttpClient) {}
  /*fetchTodos(): Observable<Product[]> {
    return this.http.get<Product[]>('https://jsonplaceholder.typicode.com/todos?_limit=30')
      .pipe(tap(todos => this.products = todos));
  }*/


  removeProduct(id: number) {
    this.products = this.products.filter(t => t.id !== id);
  }
  addProduct(name, description, producer, amount, price, categoryId, categoryName) {
    this.products.push({id: this.products.length + 1, name: name, description: description,
    producer:producer, amount: amount, price: price, categoryId: categoryId, category: categoryName});
  }
  editProduct(todo: Product, name, description, producer, price) {
    todo.name=name;
    todo.description=description;
    todo.producer=producer;
    todo.price=price;

  }
  getProduct(productId) {
    return this.products[productId - 1];
  }
  getProductsByCategory(categoryId) {
    return this.products.filter(t =>  t.category === categoryId);
  }
}
