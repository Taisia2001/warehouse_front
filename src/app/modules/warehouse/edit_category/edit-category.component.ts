import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../../services/product.service';
import {CategoryService} from '../../../services/category.service';
import {Product} from '../../../models/product';
import {ActivatedRoute} from '@angular/router';
import {Category} from '../../../models/category';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit {

  category: Category;
  nName;
  nDescription;
  constructor(private categoryService: CategoryService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.category = this.categoryService.getCategory(params.get('id'));
      this.nName = this.category.name;
      this.nDescription = this.category.description;
    });

  }
  editCategory() {
    this.categoryService.editCategory(this.category, this.nName, this.nDescription);

    //TODO show mesage category was edited or you have already had category with name ...
  }
}
