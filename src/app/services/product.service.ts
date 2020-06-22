import {Injectable} from '@angular/core';
import {Product} from '../models/product';
import {HttpClient} from '@angular/common/http';


import {map} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class ProductService {
  private products: Product[];
  constructor(private http: HttpClient) {


  }
  /*fetchTodos(): Observable<Product[]> {
    return this.http.get<Product[]>('https://jsonplaceholder.typicode.com/todos?_limit=30')
      .pipe(tap(todos => this.products = todos));
  }*/

getProducts() {
  return this.http.get('http://localhost:8080/api/show/goods');
}
  removeProduct(id: number) {
    this.http.delete('http://localhost:8080/api/good/' + id).subscribe((response: Response) => {
      const product = response;
      console.log(product);
    });
  }
  addProduct(name, description, producer, amount, price, categoryId, categoryName) {
    alert('Mistake! You have already had category with name ' + name);
    // alert("Product was succesfully created");
    this.products.push({id: this.products.length + 1, name, description,
    producer, amount, price, category: categoryId, categoryName});
    this.http.put('http://localhost:8080/api/good', null, ).subscribe((response: Response) => {
      const product = response;
      console.log(product);
    });
  }
  editProduct(todo: Product, name, description, producer, price) {
    this.http.post('http://localhost:8080/api/good', null).subscribe((response: Response) => {
      const product = response;
      console.log(product);
    });
    alert('Mistake! You have already had product with name ' + name);
    // alert("Product was succesfully edited");
    todo.name = name;
    todo.description = description;
    todo.producer = producer;
    todo.price = price;

  }
  getProduct(productId) {
    this.http.get('http://localhost:8080/api/show/good/' + productId).subscribe((response: Response) => {
      const product = response;
      console.log(product);
    });
    return this.products[productId - 1];
  }
  getProductsByCategory(categoryId) {
    return this.products.filter(t =>  t.categoryName === categoryId);
  }
}
