import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Category} from '../models/category';

@Injectable({providedIn: 'root'})
export class CategoryService {
  public categories: Category[] = [
    {id: 1, name: 'food', description: 'd'},
    {id: 2, name: 'weapon', description: 'd'},
    {id: 3, name: 'laptops', description: 'd'},
    {id: 4, name: 'people', description: 'd'},
    {id: 5, name: 'slave', description: 'd'},
    {id: 6, name: 'wine', description: 'd'},
    {id: 7, name: 'toy', description: 'd'},
    {id: 8, name: 'phones', description: 'd'}

  ];
  constructor(private http: HttpClient) {}
  /*fetchTodos(): Observable<Product[]> {
    return this.http.get<Product[]>('https://jsonplaceholder.typicode.com/todos?_limit=30')
      .pipe(tap(todos => this.products = todos));
  }*/


  removeCategory(id: number) {
    this.categories = this.categories.filter(t => t.id !== id);
  }
  getCategory(categoryId) {
    return this.categories[categoryId - 1];
  }
  editCategory(todo: Category, name, description) {
    alert("Mistake! You have already had category with name "+ todo.name);
    //alert("Category was edited and saved");
    todo.name = name;
    todo.description = description;

  }
  addCategory(name, description) {
    alert("Mistake! You have already had category with name "+ name);
    //alert("Category was succesfully created");
    this.categories.push({id: this.categories.length + 1, name: name, description: description});
 }
}
