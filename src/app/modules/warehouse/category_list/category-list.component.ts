import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../../services/product.service';
import {CategoryService} from '../../../services/category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
categories;
search = '';
  constructor(public categoryService: CategoryService) { }

  ngOnInit(): void {
    this.categoryService.getCaregories().pipe(
    ).subscribe(data => {
      this.categories = data;
    });
  }
  removeCategory(categoryId){
    this.categoryService.removeCategory(categoryId);
    this.categoryService.getCaregories().pipe(
    ).subscribe(data => {
      this.categories = data;
    });
  }
  newSearch(str){
this.search = str;
  }
  reset() {
    this.search = '';
  }

}
