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
  constructor(public categoryService: CategoryService) {
    this.categories = categoryService.getCaregories();
  }

  ngOnInit(): void {
  }
  removeCategory(categoryId){
    this.categoryService.removeCategory(categoryId);
    this.categories = this.categoryService.getCaregories();
  }
  newSearch(str){
this.search = str;
  }
  reset() {
    this.search = '';
  }

}
