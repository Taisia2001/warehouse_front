import { Component, OnInit } from '@angular/core';
import {Category} from '../../../models/category';
import {Product} from '../../../models/product';
import {CategoryService} from '../../../services/category.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
  name = '';
  description = '';


  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
  }
  addCategory() {
    const category: Category = {
      name: this.name,
      description: this.description

    };
  //  this.categoryService.addC
    this.name = '';
    this.description = '';
  }

}
