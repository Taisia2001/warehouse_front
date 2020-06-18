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
  nName = '';
  nDescription = '';


  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
  }
  addCategory() {
    // TODO alert succes or exist
    this.categoryService.addCategory(this.nName, this.nDescription);
    this.nName = '';
    this.nDescription = '';
  }

}
