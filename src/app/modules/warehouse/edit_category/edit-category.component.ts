import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../../services/product.service';
import {CategoryService} from '../../../services/category.service';
import {Product} from '../../../models/product';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit {
  name = 'hereWillBe name';
  description = 'here will be d';

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
  }
  editCategory() {
   /* const product: Product = {
      name: this.name,
      description: this.description,
      producer: this.producer,
      amount: this.amount,
      price: this.price,
      category: this.category

    };
    this.productService.editProduct(product);*/
  }
}
