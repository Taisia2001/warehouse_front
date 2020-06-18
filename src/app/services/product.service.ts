import {Injectable} from '@angular/core';
import {Product} from '../models/product';
import {HttpClient} from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class ProductService {
  private products: Product[] = [
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

getProducts() {
  return this.products;
}
  removeProduct(id: number) {
    this.products = this.products.filter(t => t.id !== id);
  }
  addProduct(name, description, producer, amount, price, categoryId, categoryName) {
    alert('Mistake! You have already had category with name ' + name);
    // alert("Product was succesfully created");
    this.products.push({id: this.products.length + 1, name, description,
    producer, amount, price, categoryId, category: categoryName});
  }
  editProduct(todo: Product, name, description, producer, price) {
    alert('Mistake! You have already had product with name ' + name);
    // alert("Product was succesfully edited");
    todo.name = name;
    todo.description = description;
    todo.producer = producer;
    todo.price = price;

  }
  getProduct(productId) {
    return this.products[productId - 1];
  }
  getProductsByCategory(categoryId) {
    return this.products.filter(t =>  t.category === categoryId);
  }
}
